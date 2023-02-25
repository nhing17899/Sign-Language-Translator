import { Hands } from "@mediapipe/hands";
import * as Hand from "@mediapipe/hands";
import * as cam from "@mediapipe/camera_utils";
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import cv from "@techstark/opencv-js";
import Webcam from "react-webcam";

import { useRef, useEffect } from 'react';

const HandDetection = () => {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  var camera = null;

  const onResults = results => {
    canvasRef.current.width = webcamRef.current.video.videoWidth;
    canvasRef.current.height = webcamRef.current.video.videoHeight;

    const canvasElement = canvasRef.current;
    const canvasCtx = canvasElement.getContext("2d");
    canvasCtx.save();

    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

    if (results.multiHandLandmarks) {
      for (const landmarks of results.multiHandLandmarks) {
        drawLandmarks(canvasCtx, landmarks, { color: '#ffffff', radius: 3 })

        drawConnectors(canvasCtx, landmarks, Hand.HAND_CONNECTIONS,
          { color: '#ffffff', lineWidth: 2 });
      }
    }
    canvasCtx.restore();
  }

  class FpsCalc {
    constructor(bufferLen) {
      this.bufferLen = bufferLen;
      this.buffer = new Array(bufferLen);
      this.prevTime = performance.now();
      this.idx = 0;
    }

    update() {
      const currTime = performance.now();
      const elapsedMs = currTime - this.prevTime;
      this.buffer[this.idx++] = 1000 / elapsedMs;
      if (this.idx === this.bufferLen) {
        this.idx = 0;
      }
      this.prevTime = currTime;
    }

    get() {
      const sum = this.buffer.reduce((acc, val) => acc + val);
      return sum / this.bufferLen;
    }
  }

  // Example usage:
  const fpsCalc = new FpsCalc(10);

  function processFrame() {
    // Process the frame...
    fpsCalc.update();
    const fps = fpsCalc.get();
  }

  useEffect(() => {
    const hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      }
    });

    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.7,
      minTrackingConfidence: 0.5
    });

    hands.onResults(onResults);

    if (typeof webcamRef.current !== "undefined" && webcamRef.current !== null) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      camera = new cam.Camera(webcamRef.current.video, {
        onFrame: async () => {
          await hands.send({ image: webcamRef.current.video });
        },
        width: 640,
        height: 480
      });
      camera.start();
    }
  })

  return (
    <div>
      <Webcam
        hidden
        ref={webcamRef}
        style={{
          position: "absolute",
          marginRight: "auto",
          marginLeft: "auto",
          left: 0,
          right: 0,
          width: 640,
          height: 480
        }}
      >
      </Webcam>

      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginRight: "auto",
          marginLeft: "auto",
          left: 0,
          right: 0,
          width: 640,
          height: 480,
          transform: 'scaleX(-1)'
        }}
      >
      </canvas>
    </div>
  )
}

export default HandDetection;

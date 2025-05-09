import {
  MotionSensor,
  SurveillanceController,
  VideoRecorder,
} from './video-surveillance';

describe('The Surveillance Controller', () => {
  let sensor;
  let recorder;
  let controller;
  beforeEach(() => {
    sensor = new FakeMotionSensor();
    recorder = new FakeVideoRecoder();
    controller = new SurveillanceController(sensor, recorder);
  });
  it('should stop recoding when sensor does not detect motion', () => {
    const spyRecorder = jest.spyOn(recorder, 'stopRecording');

    controller.recordMotion();

    expect(spyRecorder).toHaveBeenCalled();
  });

  it('should stop recoding when sensor throw an unexpected error', () => {
    const spySensor = jest.spyOn(sensor, 'isDetectingMotion');
    spySensor.mockImplementation(() => {
      throw new Error();
    });
    const spyRecorder = jest.spyOn(recorder, 'stopRecording');

    controller.recordMotion();

    expect(spyRecorder).toHaveBeenCalled();
  });

  it('should start recoding when sensor detect motion', () => {
    const spySensor = jest.spyOn(sensor, 'isDetectingMotion');
    spySensor.mockImplementation(() => true);
    const spyRecorder = jest.spyOn(recorder, 'startRecording');

    controller.recordMotion();

    expect(spyRecorder).toHaveBeenCalled();
  });

  it('checks the sensor status once per second', () => {
    const spySensor = jest.spyOn(sensor, 'isDetectingMotion');
    const numberOfSeconds = 3;

    controller.recordMotion(numberOfSeconds);

    expect(spySensor).toHaveBeenCalledTimes(numberOfSeconds);
  });
});

class FakeVideoRecoder implements VideoRecorder {
  startRecording(): void {
    console.log('start recoding ...');
  }
  stopRecording(): void {
    console.log('stop recording ...');
  }
}

class FakeMotionSensor implements MotionSensor {
  isDetectingMotion(): boolean {
    return false;
  }
}

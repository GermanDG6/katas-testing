import { MotionSensor, SurveillanceController, VideoRecorder } from './video-surveillance';

describe('The Surveillance Controller', () => {
  let sensor;
  let recorder;
  let controller;
  beforeEach(() => {
    sensor = new FakeSensor();
    recorder = new FakeRecorder();
    controller = new SurveillanceController(sensor, recorder);
  });

  it('ask the recorder to stop recording when sensor detects no motion', () => {
    const spyRecorder = jest.spyOn(recorder, 'stopRecording');
    const stubSensor = jest.spyOn(sensor, 'isDetectingMotion');
    stubSensor.mockImplementation(() => false);

    controller.recordMotion();

    expect(spyRecorder).toHaveBeenCalled();
  });

  it('ask the recorder to start recording when the sensor detecs motion', () => {
    const stubSensor = jest.spyOn(sensor, 'isDetectingMotion');
    stubSensor.mockImplementation(() => true);
    const spyRecorder = jest.spyOn(recorder, 'startRecording');

    controller.recordMotion();

    expect(spyRecorder).toHaveBeenCalled();
  });

  it('ask the recorder to stop recording when the sensor throws an unexpected error', () => {
    const stubSensor = jest.spyOn(sensor, 'isDetectingMotion');
    stubSensor.mockImplementation(() => {
      throw new Error('Unexpected Error');
    });
    const spyRecorder = jest.spyOn(recorder, 'stopRecording');

    controller.recordMotion();

    expect(spyRecorder).toHaveBeenCalled();
  });

  it('checks the sensor status once per second ', () => {
    const spySensor = jest.spyOn(sensor, 'isDetectingMotion');
    const numberOfSeconds = 3;

    controller.recordMotion(numberOfSeconds);

    expect(spySensor).toHaveBeenCalledTimes(numberOfSeconds);
  });
});

class FakeSensor implements MotionSensor {
  isDetectingMotion(): boolean {
    return false;
  }
}

class FakeRecorder implements VideoRecorder {
  startRecording(): void {
    console.log('start recording...');
  }
  stopRecording(): void {
    console.log('stop recording...');
  }
}

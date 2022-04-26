import { ErrorModule } from './error.module';

describe('OthersModule', () => {
  let othersModule: ErrorModule;

  beforeEach(() => {
    othersModule = new ErrorModule();
  });

  it('should create an instance', () => {
    expect(othersModule).toBeTruthy();
  });
});

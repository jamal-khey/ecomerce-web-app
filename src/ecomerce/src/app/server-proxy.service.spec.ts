import { TestBed } from '@angular/core/testing';

import { ServerProxyService } from './server-proxy.service';

describe('ServerProxyService', () => {
  let service: ServerProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

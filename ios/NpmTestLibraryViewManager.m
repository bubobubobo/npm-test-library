#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>

@interface RCT_EXTERN_MODULE(IOSHelloView, RCTViewManager)
RCT_EXTERN_METHOD(sayHello)
@end

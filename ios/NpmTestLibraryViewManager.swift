import UIKit

/** exporting class */
@objc(IOSHelloView)
class IOSHelloView : RCTViewManager {
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }

  override func view() -> UIView {
    return HelloView()
  }

  @objc
  func sayHello() {
    print("Hello!")
  }
}

/** create custom view class */
class HelloView : UIView {
  override init(frame: CGRect) {
    super.init(frame: frame)
    sayHi()
  }

  required init?(coder aDecoder: NSCoder) {
    super.init(coder: aDecoder)
  }

  private func sayHi() {
    print("Hi!")
  }
}

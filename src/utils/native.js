/**
 * @overview 原生业务
 */

export const nativeMixSound = (switcher, isEffective) => {
  if (!isEffective) return;

  window.WebFunMixSound
    && window.WebFunMixSound(switcher);

  window.JavascriptBridge
    && window.JavascriptBridge.WebFunMixSound(switcher);
};

export const nativeGetAppInfo = () => {
  const android = window.JavascriptBridge
    && window.JavascriptBridge.WebGetTeachCourseInfo();

  const pc = window.WebGetTeachCourseInfo
    && window.WebGetTeachCourseInfo();

  return pc || android;
};

export const equipmentInform = (data) => {
  const fn = window.equipmentInform
    ||
    (
      window.JavascriptBridge
      &&
      window.JavascriptBridge.equipmentInform
    );

  fn && fn(JSON.stringify(data));
};

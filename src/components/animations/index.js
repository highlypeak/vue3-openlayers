import FeatureAnimation from "./FeatureAnimation.vue";

import OLAnimationDrop from "./OLAnimationDrop.vue";
import ShakeAnimation from "./ShakeAnimation.vue";
import ZoomAnimation from "./ZoomAnimation.vue";
import TeleportAnimation from "./TeleportAnimation.vue";
import FadeAnimation from "./FadeAnimation.vue";
import SlideAnimation from "./SlideAnimation.vue";
import PathAnimation from "./PathAnimation.vue";
function install(app) {
  if (install.installed) {
    return;
  }

  install.installed = true;

  app.component("ol-animation-drop", OLAnimationDrop);
  app.component(FeatureAnimation.name, FeatureAnimation);
  app.component(ShakeAnimation.name, ShakeAnimation);
  app.component(ZoomAnimation.name, ZoomAnimation);
  app.component(TeleportAnimation.name, TeleportAnimation);
  app.component(FadeAnimation.name, FadeAnimation);
  app.component(SlideAnimation.name, SlideAnimation);
  app.component(PathAnimation.name, PathAnimation);
}

export default install;

export {
  install,
  OLAnimationDrop,
  FeatureAnimation,
  ShakeAnimation,
  ZoomAnimation,
  TeleportAnimation,
  FadeAnimation,
  PathAnimation,
  SlideAnimation,
};

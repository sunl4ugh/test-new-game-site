gdjs.startSceneCode = {};
gdjs.startSceneCode.localVariables = [];
gdjs.startSceneCode.GDNewSpriteObjects1= [];
gdjs.startSceneCode.GDNewSpriteObjects2= [];
gdjs.startSceneCode.GDPlay_9595buttonObjects1= [];
gdjs.startSceneCode.GDPlay_9595buttonObjects2= [];
gdjs.startSceneCode.GDStartTextObjects1= [];
gdjs.startSceneCode.GDStartTextObjects2= [];
gdjs.startSceneCode.GDBackGroundmObjects1= [];
gdjs.startSceneCode.GDBackGroundmObjects2= [];


gdjs.startSceneCode.mapOfGDgdjs_9546startSceneCode_9546GDPlay_95959595buttonObjects1Objects = Hashtable.newFrom({"Play_button": gdjs.startSceneCode.GDPlay_9595buttonObjects1});
gdjs.startSceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play_button"), gdjs.startSceneCode.GDPlay_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.startSceneCode.mapOfGDgdjs_9546startSceneCode_9546GDPlay_95959595buttonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainScene", false);
}}

}


};

gdjs.startSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.startSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.startSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.startSceneCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.startSceneCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.startSceneCode.GDStartTextObjects1.length = 0;
gdjs.startSceneCode.GDStartTextObjects2.length = 0;
gdjs.startSceneCode.GDBackGroundmObjects1.length = 0;
gdjs.startSceneCode.GDBackGroundmObjects2.length = 0;

gdjs.startSceneCode.eventsList0(runtimeScene);
gdjs.startSceneCode.GDNewSpriteObjects1.length = 0;
gdjs.startSceneCode.GDNewSpriteObjects2.length = 0;
gdjs.startSceneCode.GDPlay_9595buttonObjects1.length = 0;
gdjs.startSceneCode.GDPlay_9595buttonObjects2.length = 0;
gdjs.startSceneCode.GDStartTextObjects1.length = 0;
gdjs.startSceneCode.GDStartTextObjects2.length = 0;
gdjs.startSceneCode.GDBackGroundmObjects1.length = 0;
gdjs.startSceneCode.GDBackGroundmObjects2.length = 0;


return;

}

gdjs['startSceneCode'] = gdjs.startSceneCode;

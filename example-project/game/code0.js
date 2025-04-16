gdjs.MainSceneCode = {};
gdjs.MainSceneCode.localVariables = [];
gdjs.MainSceneCode.GDNewTiledSpriteObjects1= [];
gdjs.MainSceneCode.GDNewTiledSpriteObjects2= [];
gdjs.MainSceneCode.GDBackGroundObjects1= [];
gdjs.MainSceneCode.GDBackGroundObjects2= [];
gdjs.MainSceneCode.GDMainCarObjects1= [];
gdjs.MainSceneCode.GDMainCarObjects2= [];
gdjs.MainSceneCode.GDCar1Objects1= [];
gdjs.MainSceneCode.GDCar1Objects2= [];
gdjs.MainSceneCode.GDCar2Objects1= [];
gdjs.MainSceneCode.GDCar2Objects2= [];
gdjs.MainSceneCode.GDCar3Objects1= [];
gdjs.MainSceneCode.GDCar3Objects2= [];
gdjs.MainSceneCode.GDCoinObjects1= [];
gdjs.MainSceneCode.GDCoinObjects2= [];
gdjs.MainSceneCode.GDCar4Objects1= [];
gdjs.MainSceneCode.GDCar4Objects2= [];
gdjs.MainSceneCode.GDCar5Objects1= [];
gdjs.MainSceneCode.GDCar5Objects2= [];
gdjs.MainSceneCode.GDGameOverObjects1= [];
gdjs.MainSceneCode.GDGameOverObjects2= [];
gdjs.MainSceneCode.GDScoreTextObjects1= [];
gdjs.MainSceneCode.GDScoreTextObjects2= [];
gdjs.MainSceneCode.GDCoin2Objects1= [];
gdjs.MainSceneCode.GDCoin2Objects2= [];
gdjs.MainSceneCode.GDBackGroundmObjects1= [];
gdjs.MainSceneCode.GDBackGroundmObjects2= [];


gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDCar1Objects1ObjectsGDgdjs_9546MainSceneCode_9546GDCar2Objects1ObjectsGDgdjs_9546MainSceneCode_9546GDCar3Objects1ObjectsGDgdjs_9546MainSceneCode_9546GDCar4Objects1ObjectsGDgdjs_9546MainSceneCode_9546GDCar5Objects1Objects = Hashtable.newFrom({"Car1": gdjs.MainSceneCode.GDCar1Objects1, "Car2": gdjs.MainSceneCode.GDCar2Objects1, "Car3": gdjs.MainSceneCode.GDCar3Objects1, "Car4": gdjs.MainSceneCode.GDCar4Objects1, "Car5": gdjs.MainSceneCode.GDCar5Objects1});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDCoinObjects1ObjectsGDgdjs_9546MainSceneCode_9546GDCoin2Objects1Objects = Hashtable.newFrom({"Coin": gdjs.MainSceneCode.GDCoinObjects1, "Coin2": gdjs.MainSceneCode.GDCoin2Objects1});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDMainCarObjects1Objects = Hashtable.newFrom({"MainCar": gdjs.MainSceneCode.GDMainCarObjects1});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDCoinObjects1ObjectsGDgdjs_9546MainSceneCode_9546GDCoin2Objects1Objects = Hashtable.newFrom({"Coin": gdjs.MainSceneCode.GDCoinObjects1, "Coin2": gdjs.MainSceneCode.GDCoin2Objects1});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDMainCarObjects1Objects = Hashtable.newFrom({"MainCar": gdjs.MainSceneCode.GDMainCarObjects1});
gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDCar1Objects1ObjectsGDgdjs_9546MainSceneCode_9546GDCar2Objects1ObjectsGDgdjs_9546MainSceneCode_9546GDCar3Objects1ObjectsGDgdjs_9546MainSceneCode_9546GDCar4Objects1ObjectsGDgdjs_9546MainSceneCode_9546GDCar5Objects1Objects = Hashtable.newFrom({"Car1": gdjs.MainSceneCode.GDCar1Objects1, "Car2": gdjs.MainSceneCode.GDCar2Objects1, "Car3": gdjs.MainSceneCode.GDCar3Objects1, "Car4": gdjs.MainSceneCode.GDCar4Objects1, "Car5": gdjs.MainSceneCode.GDCar5Objects1});
gdjs.MainSceneCode.asyncCallback9779052 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MainSceneCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOverScene", false);
}gdjs.MainSceneCode.localVariables.length = 0;
}
gdjs.MainSceneCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MainSceneCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.MainSceneCode.asyncCallback9779052(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.MainSceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCar"), gdjs.MainSceneCode.GDMainCarObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDMainCarObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDMainCarObjects1[i].addPolarForce(0, 300, 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MainCar"), gdjs.MainSceneCode.GDMainCarObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDMainCarObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDMainCarObjects1[i].addPolarForce(0, -(300), 0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "CarGameRoad", 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.MainSceneCode.GDCar1Objects1.length = 0;

gdjs.MainSceneCode.GDCar2Objects1.length = 0;

gdjs.MainSceneCode.GDCar3Objects1.length = 0;

gdjs.MainSceneCode.GDCar4Objects1.length = 0;

gdjs.MainSceneCode.GDCar5Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDCar1Objects1ObjectsGDgdjs_9546MainSceneCode_9546GDCar2Objects1ObjectsGDgdjs_9546MainSceneCode_9546GDCar3Objects1ObjectsGDgdjs_9546MainSceneCode_9546GDCar4Objects1ObjectsGDgdjs_9546MainSceneCode_9546GDCar5Objects1Objects, "Car" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)), gdjs.randomInRange(30, 610), -(100), "");
}{for(var i = 0, len = gdjs.MainSceneCode.GDCar1Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCar1Objects1[i].getBehavior("Scale").setScale(0.2);
}
for(var i = 0, len = gdjs.MainSceneCode.GDCar2Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCar2Objects1[i].getBehavior("Scale").setScale(0.2);
}
for(var i = 0, len = gdjs.MainSceneCode.GDCar3Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCar3Objects1[i].getBehavior("Scale").setScale(0.2);
}
for(var i = 0, len = gdjs.MainSceneCode.GDCar4Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCar4Objects1[i].getBehavior("Scale").setScale(0.2);
}
for(var i = 0, len = gdjs.MainSceneCode.GDCar5Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCar5Objects1[i].getBehavior("Scale").setScale(0.2);
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDCar1Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCar1Objects1[i].addPolarForce(90, 130, 1);
}
for(var i = 0, len = gdjs.MainSceneCode.GDCar2Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCar2Objects1[i].addPolarForce(90, 130, 1);
}
for(var i = 0, len = gdjs.MainSceneCode.GDCar3Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCar3Objects1[i].addPolarForce(90, 130, 1);
}
for(var i = 0, len = gdjs.MainSceneCode.GDCar4Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCar4Objects1[i].addPolarForce(90, 130, 1);
}
for(var i = 0, len = gdjs.MainSceneCode.GDCar5Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCar5Objects1[i].addPolarForce(90, 130, 1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "CoinTimer", 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
gdjs.MainSceneCode.GDCoinObjects1.length = 0;

gdjs.MainSceneCode.GDCoin2Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDCoinObjects1ObjectsGDgdjs_9546MainSceneCode_9546GDCoin2Objects1Objects, "Coin" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 6)), gdjs.randomInRange(30, 610), -(100), "");
}{for(var i = 0, len = gdjs.MainSceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCoinObjects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.3));
}
for(var i = 0, len = gdjs.MainSceneCode.GDCoin2Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCoin2Objects1[i].getBehavior("Scale").setScale(gdjs.randomFloatInRange(0.1, 0.3));
}
}{for(var i = 0, len = gdjs.MainSceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCoinObjects1[i].addPolarForce(90, 130, 1);
}
for(var i = 0, len = gdjs.MainSceneCode.GDCoin2Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCoin2Objects1[i].addPolarForce(90, 130, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.MainSceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Coin2"), gdjs.MainSceneCode.GDCoin2Objects1);
gdjs.copyArray(runtimeScene.getObjects("MainCar"), gdjs.MainSceneCode.GDMainCarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDMainCarObjects1Objects, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDCoinObjects1ObjectsGDgdjs_9546MainSceneCode_9546GDCoin2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.MainSceneCode.GDCoinObjects1 */
/* Reuse gdjs.MainSceneCode.GDCoin2Objects1 */
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.MainSceneCode.GDScoreTextObjects1);
{for(var i = 0, len = gdjs.MainSceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.MainSceneCode.GDCoin2Objects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDCoin2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.MainSceneCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.MainSceneCode.GDScoreTextObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Car1"), gdjs.MainSceneCode.GDCar1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Car2"), gdjs.MainSceneCode.GDCar2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Car3"), gdjs.MainSceneCode.GDCar3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Car4"), gdjs.MainSceneCode.GDCar4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Car5"), gdjs.MainSceneCode.GDCar5Objects1);
gdjs.copyArray(runtimeScene.getObjects("MainCar"), gdjs.MainSceneCode.GDMainCarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDMainCarObjects1Objects, gdjs.MainSceneCode.mapOfGDgdjs_9546MainSceneCode_9546GDCar1Objects1ObjectsGDgdjs_9546MainSceneCode_9546GDCar2Objects1ObjectsGDgdjs_9546MainSceneCode_9546GDCar3Objects1ObjectsGDgdjs_9546MainSceneCode_9546GDCar4Objects1ObjectsGDgdjs_9546MainSceneCode_9546GDCar5Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9779132);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.MainSceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.MainSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainSceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MainSceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MainSceneCode.GDBackGroundObjects1.length = 0;
gdjs.MainSceneCode.GDBackGroundObjects2.length = 0;
gdjs.MainSceneCode.GDMainCarObjects1.length = 0;
gdjs.MainSceneCode.GDMainCarObjects2.length = 0;
gdjs.MainSceneCode.GDCar1Objects1.length = 0;
gdjs.MainSceneCode.GDCar1Objects2.length = 0;
gdjs.MainSceneCode.GDCar2Objects1.length = 0;
gdjs.MainSceneCode.GDCar2Objects2.length = 0;
gdjs.MainSceneCode.GDCar3Objects1.length = 0;
gdjs.MainSceneCode.GDCar3Objects2.length = 0;
gdjs.MainSceneCode.GDCoinObjects1.length = 0;
gdjs.MainSceneCode.GDCoinObjects2.length = 0;
gdjs.MainSceneCode.GDCar4Objects1.length = 0;
gdjs.MainSceneCode.GDCar4Objects2.length = 0;
gdjs.MainSceneCode.GDCar5Objects1.length = 0;
gdjs.MainSceneCode.GDCar5Objects2.length = 0;
gdjs.MainSceneCode.GDGameOverObjects1.length = 0;
gdjs.MainSceneCode.GDGameOverObjects2.length = 0;
gdjs.MainSceneCode.GDScoreTextObjects1.length = 0;
gdjs.MainSceneCode.GDScoreTextObjects2.length = 0;
gdjs.MainSceneCode.GDCoin2Objects1.length = 0;
gdjs.MainSceneCode.GDCoin2Objects2.length = 0;
gdjs.MainSceneCode.GDBackGroundmObjects1.length = 0;
gdjs.MainSceneCode.GDBackGroundmObjects2.length = 0;

gdjs.MainSceneCode.eventsList1(runtimeScene);
gdjs.MainSceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MainSceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.MainSceneCode.GDBackGroundObjects1.length = 0;
gdjs.MainSceneCode.GDBackGroundObjects2.length = 0;
gdjs.MainSceneCode.GDMainCarObjects1.length = 0;
gdjs.MainSceneCode.GDMainCarObjects2.length = 0;
gdjs.MainSceneCode.GDCar1Objects1.length = 0;
gdjs.MainSceneCode.GDCar1Objects2.length = 0;
gdjs.MainSceneCode.GDCar2Objects1.length = 0;
gdjs.MainSceneCode.GDCar2Objects2.length = 0;
gdjs.MainSceneCode.GDCar3Objects1.length = 0;
gdjs.MainSceneCode.GDCar3Objects2.length = 0;
gdjs.MainSceneCode.GDCoinObjects1.length = 0;
gdjs.MainSceneCode.GDCoinObjects2.length = 0;
gdjs.MainSceneCode.GDCar4Objects1.length = 0;
gdjs.MainSceneCode.GDCar4Objects2.length = 0;
gdjs.MainSceneCode.GDCar5Objects1.length = 0;
gdjs.MainSceneCode.GDCar5Objects2.length = 0;
gdjs.MainSceneCode.GDGameOverObjects1.length = 0;
gdjs.MainSceneCode.GDGameOverObjects2.length = 0;
gdjs.MainSceneCode.GDScoreTextObjects1.length = 0;
gdjs.MainSceneCode.GDScoreTextObjects2.length = 0;
gdjs.MainSceneCode.GDCoin2Objects1.length = 0;
gdjs.MainSceneCode.GDCoin2Objects2.length = 0;
gdjs.MainSceneCode.GDBackGroundmObjects1.length = 0;
gdjs.MainSceneCode.GDBackGroundmObjects2.length = 0;


return;

}

gdjs['MainSceneCode'] = gdjs.MainSceneCode;

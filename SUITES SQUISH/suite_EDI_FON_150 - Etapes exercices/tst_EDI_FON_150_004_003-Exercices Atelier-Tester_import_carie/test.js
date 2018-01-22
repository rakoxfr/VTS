function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Workshop exercise"));
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_13"), QEvent.MouseButtonPress, 66, 4, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_12"), QEvent.MouseButtonRelease, 66, 4, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":Import Caries_QPushButton"));
    clickButton(waitForObject(":OK_QPushButton_2"));
    mouseClick(waitForObject(":imgLabel_QLabel_10"), 105, 1, 0, Qt.LeftButton);
    clickButton(waitForObject(":Import Surface_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"), "P:/TP LPTQL/SolidEditor/resources/workshop/stl/dentine.stl");
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 518, -5, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    snooze(2);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_10"), QEvent.MouseButtonPress, 101, 11, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_12"), QEvent.MouseButtonRelease, 101, 11, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":Import Caries_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"), testData.field(testData.dataset("data_1.tsv")[2], "Fichiers"));
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 523, -10, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    snooze(2);
    test.vp("VP1");
}

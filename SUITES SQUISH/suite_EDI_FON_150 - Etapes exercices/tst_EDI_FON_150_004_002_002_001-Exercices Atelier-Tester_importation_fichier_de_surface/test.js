function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Workshop exercise"));
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel"), QEvent.MouseButtonPress, 49, 2, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_10"), QEvent.MouseButtonRelease, 49, 2, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":Import Surface_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"), testData.field(testData.dataset("data_1.tsv")[1], "Fichiers"));
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 523, -3, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    test.vp("VP1");
}

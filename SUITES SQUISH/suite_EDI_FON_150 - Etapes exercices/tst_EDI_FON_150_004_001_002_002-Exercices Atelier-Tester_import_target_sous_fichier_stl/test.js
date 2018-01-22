function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Workshop exercise"));
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_2"), QEvent.MouseButtonPress, 85, 8, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_9"), QEvent.MouseButtonRelease, 85, 8, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":Import Surface_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"), testData.field(testData.dataset("data_1.tsv")[1], "Fichiers"));
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 515, -8, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    snooze(2);
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_10"), QEvent.MouseButtonPress, 96, 2, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_11"), QEvent.MouseButtonRelease, 96, 2, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":Import Target_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"), testData.field(testData.dataset("data_1.tsv")[3], "Fichiers"));
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 518, -4, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    snooze(2);
    test.vp("VP1");
}

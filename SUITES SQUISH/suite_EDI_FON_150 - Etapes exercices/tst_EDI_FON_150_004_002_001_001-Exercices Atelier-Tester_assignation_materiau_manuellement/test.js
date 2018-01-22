function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Workshop exercise"));
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel"), QEvent.MouseButtonPress, 97, 4, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_10"), QEvent.MouseButtonRelease, 97, 4, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":Import Surface_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"), testData.field(testData.dataset("data_1.tsv")[1], "Fichiers"));
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 512, -9, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    mouseClick(waitForObject(":materialComboBox_QComboBox"), 105, 23, 0, Qt.LeftButton);
    mouseClick(waitForObjectItem(":materialComboBox_QComboBox", "Enamel"), 72, 5, 0, Qt.LeftButton);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_19"), QEvent.MouseButtonPress, 103, 0, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_20"), QEvent.MouseButtonRelease, 103, 0, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_21"), QEvent.MouseButtonPress, 38, 0, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_22"), QEvent.MouseButtonRelease, 38, 0, Qt.LeftButton, 0, 0);
    test.vp("VP1");
}

function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_6"), QEvent.MouseButtonPress, 116, 12, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":titleLabel_QLabel_7"), QEvent.MouseButtonRelease, 116, 12, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":contentGroupBox.insertImagePushButton_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"),testData.field(testData.dataset("data_1.tsv")[4], "Fichiers") );
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 509, -7, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    test.vp("VP2");
}

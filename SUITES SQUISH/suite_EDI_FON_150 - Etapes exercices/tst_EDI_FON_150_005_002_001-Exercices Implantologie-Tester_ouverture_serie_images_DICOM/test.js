function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_5"), QEvent.MouseButtonPress, 122, 53, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_10"), QEvent.MouseButtonRelease, 122, 53, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":Import DICOM series_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"), testData.field(testData.dataset("data_1.tsv")[0], "Fichiers"));
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 517, -14, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    snooze(15);    
    test.vp("VP1");
}

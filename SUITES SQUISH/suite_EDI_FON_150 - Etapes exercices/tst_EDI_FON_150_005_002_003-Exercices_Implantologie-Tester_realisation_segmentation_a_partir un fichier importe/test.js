function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_5"), QEvent.MouseButtonPress, 59, 34, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_10"), QEvent.MouseButtonRelease, 59, 34, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":Import DICOM series_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"), testData.field(testData.dataset("data_1.tsv")[0], "Fichiers"));
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 521, -5, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    clickTab(waitForObject(":Import DICOM series_QTabWidget"), "3D TOOLS");
    clickButton(waitForObject(":3D TOOLS_QToolButton"));
    clickButton(waitForObject(":importSegmentationGroupBox._importFileButton_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"), testData.field(testData.dataset("data_1.tsv")[6], "Fichiers"));
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 535, -3, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    snooze(8);
    test.vp("VP1");
}

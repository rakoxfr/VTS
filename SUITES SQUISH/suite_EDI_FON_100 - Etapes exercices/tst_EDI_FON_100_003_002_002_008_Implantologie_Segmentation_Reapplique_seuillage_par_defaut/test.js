function main() {
    mouseClick(waitForObject(":stackedWidget.widget_QWidget"), 298, 20, 0, Qt.LeftButton);
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel"), QEvent.MouseButtonPress, 82, 1, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":numberLabel_QLabel_6"), QEvent.MouseButtonRelease, 82, 1, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":Import DICOM series_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"), testData.field(testData.dataset("data_1.tsv")[0], "Fichiers"));
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 521, 0, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    clickTab(waitForObject(":Import DICOM series_QTabWidget"), "3D TOOLS");
    clickButton(waitForObject(":3D TOOLS_QToolButton"));
    clickButton(waitForObject(":_thresholdingGroup._defaultThresholdButton_QPushButton"));
    test.vp("VP1");
}

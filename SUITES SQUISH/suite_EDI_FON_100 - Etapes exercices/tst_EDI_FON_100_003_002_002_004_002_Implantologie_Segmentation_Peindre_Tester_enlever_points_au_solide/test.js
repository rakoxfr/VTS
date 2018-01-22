function main() {
    activateItem(waitForObjectItem(":MainWindow_QMenuBar", "File"));
    activateItem(waitForObjectItem(":MainWindow.File_QMenu", "New"));
    activateItem(waitForObjectItem(":File.New_QMenu", "Implantology exercise"));
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_6"), QEvent.MouseButtonPress, 96, 8, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":imgLabel_QLabel_8"), QEvent.MouseButtonRelease, 96, 8, Qt.LeftButton, 0, 0);
    clickButton(waitForObject(":Import DICOM series_QPushButton"));
    type(waitForObject(":fileNameEdit_QLineEdit"), testData.field(testData.dataset("data_1.tsv")[0], "Fichiers"));
    sendEvent("QMouseEvent", waitForObject(":_QListView"), QEvent.MouseButtonPress, 524, -8, Qt.LeftButton, 1, 0);
    clickButton(waitForObject(":QFileDialog.Open_QPushButton"));
    clickButton(waitForObject(":2D TOOLS_QToolButton_3"));
    scrollTo(waitForObject(":2D TOOLS.1 _QSlider"), 50);
    mouseDrag(waitForObject(":_QmitkRenderWindow"), 160, 108, 5, 110, 1, Qt.LeftButton);
    clickButton(waitForObject(":2D TOOLS_QToolButton_4"));
    sendEvent("QMouseEvent", waitForObject(":_QmitkRenderWindow"), QEvent.MouseButtonPress, 170, 138, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":_QmitkRenderWindow"), QEvent.MouseButtonRelease, 170, 138, Qt.LeftButton, 0, 0);
    sendEvent("QMouseEvent", waitForObject(":_QmitkRenderWindow"), QEvent.MouseButtonPress, 222, 141, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":_QmitkRenderWindow"), QEvent.MouseButtonRelease, 222, 141, Qt.LeftButton, 0, 0);
    scrollTo(waitForObject(":2D TOOLS.50 _QSlider"), 24);
    mouseDrag(waitForObject(":_QmitkRenderWindow"), 154, 189, 96, -15, 1, Qt.LeftButton);
    sendEvent("QMouseEvent", waitForObject(":_QmitkRenderWindow"), QEvent.MouseButtonPress, 194, 171, Qt.LeftButton, 1, 0);
    sendEvent("QMouseEvent", waitForObject(":_QmitkRenderWindow"), QEvent.MouseButtonRelease, 194, 171, Qt.LeftButton, 0, 0);
    test.vp("VP1");
   }

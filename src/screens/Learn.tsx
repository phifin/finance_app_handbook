import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {appLogo} from '../assets/imageSrc';
import quizzesData from '../assets/quizzes.json';

const Learn = () => {
  const [quizData, setQuizData] = useState(quizzesData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null); // 'correct', 'incorrect'

  const handleAnswerPress = index => {
    setSelectedAnswerIndex(index);
    const correctIndex = quizData[currentQuestionIndex].correctAnswerIndex;
    if (index === correctIndex) {
      setAnswerStatus('correct');
    } else {
      setAnswerStatus('incorrect');
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
    if (currentQuestionIndex + 1 < quizData.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(0); // Đưa người dùng trở lại câu đầu tiên
    }
  };

  const handlePreviousQuestion = () => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleJumpToQuestion = index => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
    setCurrentQuestionIndex(index);
  };

  const renderOptions = () => {
    return quizData[currentQuestionIndex].options.map((option, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.option,
          selectedAnswerIndex === index &&
            answerStatus === 'correct' &&
            styles.correctAnswer,
          selectedAnswerIndex === index &&
            answerStatus === 'incorrect' &&
            styles.incorrectAnswer,
        ]}
        onPress={() => handleAnswerPress(index)}
        disabled={selectedAnswerIndex !== null && answerStatus === 'correct'}>
        <Text style={styles.optionText}>{option}</Text>
        {selectedAnswerIndex === index && answerStatus === 'correct' && (
          <Text style={styles.result}>✓</Text>
        )}
        {selectedAnswerIndex === index && answerStatus === 'incorrect' && (
          <Text style={styles.result}>✕</Text>
        )}
      </TouchableOpacity>
    ));
  };

  const renderHint = () => {
    if (selectedAnswerIndex !== null && answerStatus === 'incorrect') {
      return (
        <Text style={styles.hint}>
          Hint: {quizzesData[currentQuestionIndex].hint}
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={appLogo}
          alt="appLogo"
          style={{height: 200, width: 200, alignSelf: 'center'}}
        />
        <Text
          style={{
            fontSize: 45,
            color: '#4b0082',
            alignSelf: 'center',
            marginTop: -20,
            marginBottom: 40,
          }}>
          Finhub Learn
        </Text>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text style={styles.question}>
          {quizData[currentQuestionIndex].question}
        </Text>
        {renderOptions()}
        {renderHint()}
        <View style={styles.navigation}>
          <TouchableOpacity
            style={[styles.navigationButton, {marginRight: 10}]}
            onPress={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}>
            <Text style={styles.navigationButtonText}>Back</Text>
          </TouchableOpacity>
          <Picker
            selectedValue={currentQuestionIndex}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) =>
              handleJumpToQuestion(itemValue)
            }>
            {quizData.map((_, index) => (
              <Picker.Item key={index} label={`${index + 1}`} value={index} />
            ))}
          </Picker>
          <TouchableOpacity
            style={[styles.navigationButton, {marginLeft: 10}]}
            onPress={handleNextQuestion}
            disabled={
              selectedAnswerIndex === null && answerStatus !== 'correct'
            }>
            <Text style={styles.navigationButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
  },
  correctAnswer: {
    backgroundColor: 'lightgreen',
    borderColor: 'green',
  },
  incorrectAnswer: {
    backgroundColor: 'lightcoral',
    borderColor: 'red',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  hint: {
    fontSize: 14,
    fontStyle: 'italic',
    marginTop: 10,
    color: '#777',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  navigationButton: {
    backgroundColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  navigationButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Learn;

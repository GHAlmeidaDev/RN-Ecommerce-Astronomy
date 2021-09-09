import ExitIcon from './ExitIcon'
import { render } from '@testing-library/react-native';


it('should find the button via accessibilityLabel', () => {
    const accessibilityLabel = 'Press me';
    
    const {getByA11yLabel} = render(<ExitIcon onPress={() => {}}/>);
  
    const foundButton = getByA11yLabel(accessibilityLabel);
  
    expect(foundButton).toBeTruthy();
  });
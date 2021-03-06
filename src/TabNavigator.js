/*
---- importes utilizados ----
*/
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TabBar from './components/TabBar'
import ProfileNavigator from './stack/ProfileNavigator'
import GratisNavigator from './stack/GratisNavegatior'
import MensajeNavigator from './stack/MensajeNavigator'
import PremiumNavigator from './stack/PremiumNavegation'
import { NavigationContainer } from '@react-navigation/native'

//instanciacion de menu inferior
const Tab = createBottomTabNavigator()

/*
---- menu inferior ----
*/
const TabNavigator = ({ navigation, route }) => {
	return (
		<NavigationContainer independent={true}>
			<Tab.Navigator tabBar={props => <TabBar {...props} />}>
				<Tab.Screen
					name='Gratis'
					component={GratisNavigator}
					initialParams={{ icon: 'home', drawer: navigation }}
				/>

				<Tab.Screen
					name='Premium'
					component={PremiumNavigator}
					initialParams={{ icon: 'star-empty', drawer: navigation }}
				/>
				<Tab.Screen
					name='Mensaje'
					component={MensajeNavigator}
					initialParams={{ icon: 'bubble2', drawer: navigation }}
				/>

				<Tab.Screen
					name='Cuenta'
					component={ProfileNavigator}
					initialParams={{ icon: 'user', drawer: navigation }}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}

export default TabNavigator

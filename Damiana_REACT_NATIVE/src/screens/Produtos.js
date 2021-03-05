import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
} from 'react-native'
import BackButton from '../components/BackButton'
import Background from '../components/Background'

class Produtos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          id: 1,
          title: 'Listras Branco/Preto',
          price: 'R$ 69,90',
          image: require('../assets/produtos/biquini1.jpg'),
          likes: "89"
        },
        {
          id: 2,
          title: "Cortininha Preto",
          price: 'R$ 49,90',
          image: require('../assets/produtos/biquini2.jpg'),
          likes: "37"
        },
        {
          id: 3,
          title: 'Neon cor verde',
          price: 'R$ 89,90',
          image: require('../assets/produtos/biquini3.jpg'),
          likes: "100"
        },
        {
          id: 4,
          title: 'Cintura-Alta',
          price: 'R$ 89,90',
          image: require('../assets/produtos/biquini4.jpg'),
          likes: "98"
        },
        {
          id: 5,
          title: 'Preto detalhe Neon',
          price: 'R$ 49,90',
          image: require('../assets/produtos/biquini5.jpg'),
          likes: "45"
        },
        {
          id: 6,
          title: 'Rosa tie die',
          price: 'R$ 79,90',
          image: require('../assets/produtos/biquini6.jpg'),
          likes: "69"
        },
      ],
    }
  }

  addProductToCart = () => {
    Alert.alert('Pronto', 'Produto adicionado ao carrinho')
  }

  render() {
    return (
        <Background>
        <BackButton goBack={this.props.navigation.goBack} />
        <View style={styles.container}>
        <FlatList
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor={(item) => {
            return item.id
          }}
          ItemSeparatorComponent={() => {
            return <View style={styles.separator} />
          }}
          renderItem={(post) => {
            const item = post.item
            return (
              <View style={styles.card}>
                <View style={styles.cardHeader}>
                  <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                  </View>
                </View>

                <Image style={styles.cardImage} source={item.image} />

                <View style={styles.cardFooter}>
                  <View style={styles.socialBarContainer}>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity
                        style={styles.socialBarButton}
                        onPress={() => this.addProductToCart()}
                      >
                        <Image
                          style={styles.icon}
                          source={{
                            uri:
                              'https://img.icons8.com/nolan/96/3498db/add-shopping-cart.png',
                          }}
                        />
                        <Text style={[styles.socialBarLabel, styles.buyNow]}>
                          Comprar
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.socialBarSection}>
                      <TouchableOpacity style={styles.socialBarButton}>
                        <Image
                          style={styles.icon}
                          source={{
                            uri:
                              'https://img.icons8.com/color/50/000000/hearts.png',
                          }}
                        />
                        <Text style={styles.socialBarLabel}>{item.likes}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            )
          }}
        />
      </View>
      </Background>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal:-50,
  },
  list: {
    paddingHorizontal: 5,
  },
  listContainer: {
    alignItems: 'center',
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor: 'white',
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title: {
    fontSize: 18,
    flex: 1,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  buyNow: {
    color: 'purple',
  },
  icon: {
    width: 25,
    height: 25,
  },
  /******** social bar ******************/
  socialBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarSection: {
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  socialBarlabel: {
    marginLeft: 8,
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  socialBarButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Produtos

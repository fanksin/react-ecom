import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
} from '../actions/action-types/cart-actions'
const initState = {
  items: [
    {
      id: 1,
      title: 'Et rerum consequatur qui voluptas est quaerat ab.',
      slug: 'et-rerum-consequatur-qui-voluptas-est-quaerat-ab',
      description:
        'Consequatur ut odit eius aut ab est tempore voluptatibus. Dicta accusamus iure voluptas et unde. Repellat quos et consectetur aliquid delectus. Sed exercitationem est quia omnis repellendus.',
      body:
        'Delectus autem at hic sed quibusdam. Ut doloribus officiis sit rerum doloribus. Quis necessitatibus quo mollitia et ut veniam neque quas. Nostrum blanditiis inventore molestias deserunt dolor eos maxime. Veniam dolore iusto nobis adipisci reprehenderit in. Vel eaque repudiandae voluptate iusto alias delectus esse. Est perferendis atque iste necessitatibus et. Molestiae cum quia possimus rerum. Consequuntur iusto ipsa vel dolores corporis consequatur quia. Quaerat facilis quibusdam porro error et. Possimus maiores ratione quas qui iste rem cum. Eligendi culpa quibusdam dignissimos totam. Aperiam ut et vel soluta quis cupiditate inventore. Quasi et eius animi rem consequatur eos rerum. Expedita dolorem optio quis alias aut consectetur odio qui. Dicta modi harum et et. Laboriosam qui deleniti dolor minus dignissimos alias saepe. Accusantium eveniet velit sint ipsam id vel ullam. Dignissimos suscipit rem ut quia.',
      sale_price: '577.00',
      stock: 46,
      image: 'https://via.placeholder.com/1000x1000.png/00ee00?text=dolorem',
      created_at: '2021-05-26T16:46:19.000000Z',
    },
    {
      id: 2,
      title: 'Nam minima recusandae velit voluptatem porro.',
      slug: 'nam-minima-recusandae-velit-voluptatem-porro',
      description:
        'Rerum et quis sint quisquam minima aliquid numquam dolores. Corrupti aperiam sed accusamus fugit debitis aliquid. Ut ab qui incidunt et.',
      body:
        'Voluptas eum quisquam molestias aut voluptatem cupiditate vel voluptas. Quis beatae vitae consequatur iste. Consectetur non et at optio iusto. Iure impedit fugiat ut et iusto provident labore. Quis unde et enim voluptatibus. Molestias minima deserunt animi. Ut a dolore dolorum temporibus. Provident consequatur rerum et quaerat. Voluptatibus ut facilis dolor alias tenetur sit dolore. Cum doloribus ut voluptatibus praesentium non id quos. Quo harum perspiciatis expedita qui eos quia exercitationem. Voluptate quod sunt consequatur voluptatem qui sed est quis. Dolor sint qui perferendis aperiam velit minima. Officiis nostrum aut tenetur. Qui dolorem voluptatem aut non error occaecati. Perspiciatis non autem et quia fugiat eos numquam. Dolorum et incidunt repudiandae in eveniet excepturi voluptatibus. Mollitia doloribus est dolorum tempore. Sed vel excepturi quisquam alias. Tempore delectus beatae molestiae dolore beatae est voluptatem cumque.',
      sale_price: '101.00',
      stock: 4,
      image: 'https://via.placeholder.com/1000x1000.png/001166?text=expedita',
      created_at: '2021-05-26T16:46:19.000000Z',
    },
    {
      id: 3,
      title: 'Et voluptate beatae omnis facilis sint et.',
      slug: 'et-voluptate-beatae-omnis-facilis-sint-et',
      description:
        'Molestiae debitis minima itaque nobis omnis corrupti est exercitationem. Mollitia dolores labore sed tempore. Debitis expedita deserunt debitis beatae aliquam vitae excepturi. Enim aliquam ab et aut.',
      body:
        'Temporibus suscipit nihil reiciendis consequuntur. Tenetur eveniet quia ipsum repellat ut laboriosam asperiores. Quibusdam qui dolor omnis. Quis vel ut temporibus quo consectetur ab. Ipsa necessitatibus voluptatum dolores nihil dolorum quisquam eligendi. Earum eos debitis necessitatibus quae quisquam mollitia. Placeat voluptatum non itaque et recusandae quo facilis. Similique sequi vitae adipisci quis qui nihil molestiae. Ea et est quia quia aperiam voluptatem possimus. Eius molestiae voluptates sit harum aspernatur voluptate. Harum alias amet architecto praesentium et debitis. Eum ex voluptatum natus qui dolor aut. Sint praesentium qui quia illum. Ratione ab est sapiente quisquam enim voluptas natus quia. Occaecati repellendus aspernatur voluptatem eveniet sit. Voluptatem enim explicabo quaerat expedita odit autem labore impedit.',
      sale_price: '232.00',
      stock: 115,
      image:
        'https://via.placeholder.com/1000x1000.png/0055ee?text=perferendis',
      created_at: '2021-05-26T16:46:19.000000Z',
    },
    {
      id: 4,
      title: 'Dolorem dolores earum cum voluptates natus iste doloribus.',
      slug: 'dolorem-dolores-earum-cum-voluptates-natus-iste-doloribus',
      description:
        'Corporis velit possimus consequatur laboriosam possimus corporis. Qui suscipit qui fugit laborum vel nam aliquid. Veniam consequatur et dolore deleniti aut et. Sit consequuntur deleniti et hic.',
      body:
        'Modi cum vel et autem. Non eveniet non id consequatur. Vel dolorum non debitis et voluptas. Sapiente rerum sunt veniam corporis eaque asperiores molestiae. Reprehenderit repudiandae qui inventore. Omnis sit ipsum hic at architecto. Molestias ab excepturi iusto architecto voluptate enim dolor reiciendis. Voluptatem dolor quidem consectetur blanditiis velit reiciendis dignissimos. Architecto minima nam vitae architecto esse repudiandae tenetur et. Culpa asperiores pariatur eius quasi minima. Vel provident reprehenderit et veniam quo quo saepe mollitia. Ut voluptatem possimus velit molestiae ut perspiciatis a. Non ex harum qui. Illo est rerum cum mollitia deleniti odit. Molestias delectus maxime repellendus impedit. Aliquam excepturi quia reiciendis unde. Incidunt quisquam aut nulla at est. Tenetur dicta sunt sit quod accusamus ut. Cum pariatur numquam necessitatibus cupiditate sunt consequatur. Sequi facilis ut natus ad.',
      sale_price: '721.00',
      stock: 280,
      image: 'https://via.placeholder.com/1000x1000.png/0000aa?text=quia',
      created_at: '2021-05-26T16:46:19.000000Z',
    },
    {
      id: 5,
      title: 'Et debitis suscipit delectus incidunt occaecati totam.',
      slug: 'et-debitis-suscipit-delectus-incidunt-occaecati-totam',
      description:
        'Ex maxime est consequatur explicabo eos. Aut ut voluptas laudantium officiis et. Et et debitis exercitationem dolorem deleniti repellat consequatur alias. Ut iste est omnis velit. Quisquam rerum qui perferendis nesciunt.',
      body:
        'Quia quo omnis porro itaque exercitationem. Omnis beatae qui nihil odit quod qui minus voluptas. Ut eveniet hic corporis consequatur. Temporibus quo architecto et. Est non quasi aliquam eum ratione et. Recusandae magni at quo perspiciatis quia asperiores sint laborum. Voluptatum sunt saepe rerum. Sunt possimus soluta ratione officiis. Soluta earum ea quis fuga tenetur. Est eos itaque iusto ut aut. Eveniet similique quia ut quibusdam. Repudiandae ipsum repellendus qui sed. Temporibus esse et debitis et sint itaque. Accusantium inventore quis quo dolorem voluptatibus sit atque. Est dolor est accusantium consectetur. Voluptatem temporibus suscipit minus quae voluptatem fugit. Nesciunt soluta quas dicta omnis. Et consequuntur voluptas aut qui consequatur. Est voluptatibus ipsa est a dolorem tenetur. Laudantium illo magnam dignissimos corporis beatae quaerat quas.',
      sale_price: '370.00',
      stock: 98,
      image: 'https://via.placeholder.com/1000x1000.png/00dd44?text=autem',
      created_at: '2021-05-26T16:46:19.000000Z',
    },
    {
      id: 6,
      title: 'Iste non voluptas ut.',
      slug: 'iste-non-voluptas-ut',
      description:
        'Velit veritatis et vel dolor qui aliquid suscipit. Nostrum fuga labore provident suscipit accusantium ipsum. Alias quia ut occaecati laborum quis dolor. Nostrum quo sunt occaecati provident.',
      body:
        'Et velit accusamus eaque non. Eligendi voluptatem nostrum et commodi. Omnis voluptatem voluptas sint sunt quibusdam expedita praesentium. Nam tenetur aliquam sunt quis. Est molestiae eligendi harum recusandae omnis. Ipsam distinctio excepturi quia explicabo quis porro. Voluptatem dolorum ut nemo vel. Ullam illum quos ut nemo ea dolor reiciendis. Consequatur explicabo animi harum et iusto maxime. Et dolores perferendis et. Occaecati molestias exercitationem fuga eius natus molestias. Et tempore iure asperiores eum. Ratione minus reprehenderit minima et minus laudantium. Ut ipsam quasi est odio ut aut. Placeat possimus hic ratione inventore quibusdam. Et est quam dolores consequatur quas. Maiores maxime expedita ab. Error odio sed quis voluptatem. Perferendis ducimus occaecati earum laudantium est dicta fugiat. Maiores aliquam fugiat cupiditate ipsam nemo ut eius. Placeat voluptas enim praesentium minima corrupti sint non.',
      sale_price: '705.00',
      stock: 62,
      image: 'https://via.placeholder.com/1000x1000.png/0077aa?text=quasi',
      created_at: '2021-05-26T16:46:19.000000Z',
    },
    {
      id: 7,
      title: 'Optio et inventore ad ut nesciunt quo dolorem tempora.',
      slug: 'optio-et-inventore-ad-ut-nesciunt-quo-dolorem-tempora',
      description:
        'Qui sed voluptatem et repudiandae. Rerum amet eligendi rerum voluptas eum esse ut. Repudiandae harum repellendus at eos numquam.',
      body:
        'Molestiae et soluta vitae dolor ut. Libero numquam nobis porro ad. Est molestiae vero quis sit ducimus voluptatem debitis. Soluta eveniet eos consequuntur voluptatem distinctio modi. Officiis est nisi delectus omnis quo. Dignissimos ex sit id ut laboriosam. Dignissimos omnis doloribus incidunt non. Consectetur possimus pariatur praesentium laborum molestiae. Esse sint eveniet qui omnis et ab magnam. Laborum amet eius et aut modi cum ex. Eligendi illum asperiores animi et odio incidunt. Rerum suscipit nihil doloremque. Vel cum iure quia dolores quae doloribus fugit. Aut est quidem velit ea. Beatae temporibus velit pariatur laboriosam commodi. Ut consectetur cumque reprehenderit dicta sint deserunt. Quisquam adipisci dolore qui ut. Neque corporis sint labore earum voluptate quis. Qui possimus iste aliquid nisi fuga qui provident.',
      sale_price: '830.00',
      stock: 238,
      image: 'https://via.placeholder.com/1000x1000.png/0077ff?text=ipsum',
      created_at: '2021-05-26T16:46:19.000000Z',
    },
    {
      id: 8,
      title: 'Sunt sint voluptatem sunt.',
      slug: 'sunt-sint-voluptatem-sunt',
      description:
        'Hic blanditiis perferendis et inventore aut autem architecto et. Magnam omnis sequi quis voluptatem. Vero vel saepe fuga veniam est quas. Qui nisi occaecati modi nisi quo aperiam ut.',
      body:
        'Minima nesciunt sequi tempora aliquam. Voluptatem ut nam animi et rem nobis. Autem tempore dicta nisi qui nihil cum laborum. Aut reprehenderit voluptates sit ut mollitia animi. Quia tempore voluptatem et. Eius quo ex sint id. Sit odio enim possimus non sit ut ad quaerat. In accusamus id nesciunt recusandae veritatis et. Iste nisi quia qui alias eum. Cum rerum cupiditate assumenda consequatur aspernatur. Omnis aut possimus consectetur ipsum explicabo voluptatibus autem et. Non cumque est quia in. Iusto voluptatem voluptatum et et. Earum aut veritatis porro incidunt pariatur pariatur voluptatem. Quas perferendis rerum necessitatibus dolorum suscipit quam minus. Eveniet optio rerum sed perspiciatis. Velit cum explicabo exercitationem qui omnis alias. Cum debitis rerum exercitationem distinctio deserunt vitae qui. Vero optio reiciendis ut. Nesciunt magni amet cupiditate quia. Qui qui ea consectetur. A qui nesciunt illum vitae nobis accusamus consequuntur. Commodi et sit aspernatur sint.',
      sale_price: '317.00',
      stock: 166,
      image: 'https://via.placeholder.com/1000x1000.png/005566?text=officia',
      created_at: '2021-05-26T16:46:19.000000Z',
    },
    {
      id: 9,
      title: 'Consequatur incidunt ipsum voluptas minima.',
      slug: 'consequatur-incidunt-ipsum-voluptas-minima',
      description:
        'Omnis labore dolore nihil veritatis similique quia. Quo est autem error consequuntur distinctio.',
      body:
        'Quaerat consequuntur accusamus velit dolor. Temporibus deserunt minima dicta tenetur vel ratione accusamus. Ipsam est sit eaque facilis earum. Voluptates molestiae ut quidem totam perspiciatis distinctio. Nobis aut perspiciatis dignissimos atque officiis quis delectus. Laboriosam voluptatibus sed voluptatem in a aspernatur. Consequuntur aspernatur officiis est omnis incidunt. Similique esse sequi nostrum minima. Quisquam commodi id sequi inventore. Ut quo et minus. Vero quo veniam suscipit dignissimos quisquam repellendus rem sed. Voluptas autem voluptas veritatis rerum. Architecto est ducimus ducimus numquam saepe accusantium alias. Facere quia aut laudantium beatae debitis necessitatibus voluptatem placeat. Provident velit accusamus occaecati distinctio qui. Non sit voluptatibus eos recusandae explicabo. Veritatis qui est ullam perspiciatis corporis aperiam rerum.',
      sale_price: '552.00',
      stock: 29,
      image: 'https://via.placeholder.com/1000x1000.png/009966?text=facilis',
      created_at: '2021-05-26T16:46:19.000000Z',
    },
    {
      id: 10,
      title: 'Dolores ipsa quis suscipit aut.',
      slug: 'dolores-ipsa-quis-suscipit-aut',
      description:
        'Reprehenderit tenetur aut praesentium consequatur. Omnis est rem nulla sequi amet tempora. In sed similique ut omnis eos eligendi.',
      body:
        'Vitae et natus illum delectus. Harum aut ut rerum animi eum. In corrupti necessitatibus rerum dolor ea voluptatibus. Inventore dolorem asperiores veritatis in voluptas dolor sapiente. Ex aut nostrum aut quod. Voluptatem eaque eius dolorem harum ut. Velit pariatur at non cumque quibusdam quaerat et. Eum aliquid illo veritatis quas. Aliquam ut cupiditate id quia fugiat totam. Nisi aut sed dolorem. Voluptatem culpa rerum sed neque dolorem dolorem accusantium et. Aliquid laborum architecto eius dolore aliquid eveniet distinctio. Blanditiis veniam natus unde iure est ullam. Cupiditate deleniti non ut pariatur neque id. Corrupti debitis maxime et sed omnis ut odit. Ut excepturi aperiam vel non minus id. Distinctio sit est ut minima et consequatur. In aliquid possimus tempore. Quos omnis incidunt nisi laudantium magni eius ratione. Voluptatum est aut tenetur quas dolore eos et. Velit odit laudantium nulla.',
      sale_price: '664.00',
      stock: 219,
      image: 'https://via.placeholder.com/1000x1000.png/008800?text=suscipit',
      created_at: '2021-05-26T16:46:19.000000Z',
    },
    {
      id: 11,
      title: 'Maiores aut dignissimos soluta provident consequuntur.',
      slug: 'maiores-aut-dignissimos-soluta-provident-consequuntur',
      description:
        'Veniam modi totam ut dignissimos et. Vel impedit voluptate voluptatem velit nemo dolorem eligendi voluptates. Dignissimos aut eligendi in. Praesentium qui esse beatae ea ea cumque.',
      body:
        'Delectus placeat et error ullam. Ut exercitationem eos est eaque dolores ut. Autem nostrum deserunt autem. Ea dolorem non maiores dicta. Qui at rem reiciendis impedit iste. Distinctio necessitatibus eos fugiat enim perferendis ea. Molestiae omnis expedita quae omnis id nostrum aliquam a. Reiciendis repudiandae voluptate ea consequatur. Delectus aperiam reprehenderit voluptatem eligendi quos accusamus temporibus. Dolor sed corporis sint quaerat. Ut doloremque nulla quia. Modi accusamus ut dolorum dolorem reiciendis dolorem sed officia. Eaque quia perferendis id tempore nostrum itaque. Beatae rem recusandae et rem. Repellendus nihil sed ab aut iure qui. Quia fugit enim tempore sunt dolor saepe. Aspernatur et dignissimos id voluptatem deleniti qui. Voluptatem hic eos officia dolores et necessitatibus. Quia unde et eum ullam earum corrupti architecto. Qui dolores impedit sequi architecto. Dolore sed est deserunt.',
      sale_price: '721.00',
      stock: 137,
      image: 'https://via.placeholder.com/1000x1000.png/0077cc?text=minima',
      created_at: '2021-05-26T16:46:19.000000Z',
    },
    {
      id: 12,
      title: 'Corrupti atque voluptas consequuntur nihil nemo quam cupiditate.',
      slug: 'corrupti-atque-voluptas-consequuntur-nihil-nemo-quam-cupiditate',
      description:
        'Voluptas quibusdam voluptas aut ipsum. Dolore corporis rerum deleniti repellat impedit. Qui aspernatur est in distinctio illo.',
      body:
        'Autem optio nesciunt eum. Autem iste vel natus doloribus molestiae alias voluptatem. Debitis qui consequatur saepe dignissimos. Id ut dolorum voluptatem. Nemo id doloremque corrupti consequatur distinctio provident. Maxime molestiae labore incidunt rem ea possimus architecto et. Qui unde id eos adipisci ipsa voluptatem. Ducimus quia magni error rem. Debitis reprehenderit debitis architecto dignissimos. Repudiandae veniam aut consequatur laudantium. Non assumenda et voluptatem eos numquam dolorem. Temporibus laborum totam commodi quod earum aliquid cumque. Nisi voluptatem reprehenderit aut sint. Quaerat dolorem expedita id nostrum quis. Voluptatem qui non porro doloremque quia laudantium. Officia tempora soluta et. Et nihil dolorem quia dolorem facilis qui fuga modi. Debitis maxime commodi delectus quis placeat optio.',
      sale_price: '333.00',
      stock: 146,
      image: 'https://via.placeholder.com/1000x1000.png/00dd44?text=quis',
      created_at: '2021-05-26T16:46:19.000000Z',
    },
    {
      id: 13,
      title: 'Placeat ea consequatur dolore temporibus.',
      slug: 'placeat-ea-consequatur-dolore-temporibus',
      description:
        'Voluptatibus sed rem consectetur ea illo. Neque sed qui modi in dolore alias. Sequi dignissimos dolor fugiat sunt.',
      body:
        'Incidunt voluptatem harum nisi molestias voluptatem ducimus tenetur est. Dignissimos cumque amet asperiores exercitationem consectetur. Dolor officia et molestiae voluptatum nobis dolorum officiis. Dignissimos ullam iusto occaecati sit consequatur est. Quo totam tenetur hic voluptatem fuga error. Minus animi enim ut cum autem dolorem a. Assumenda eum molestias libero natus dolor. Aut enim non ut consequatur incidunt eius et. Nostrum nobis porro vitae modi quos. Placeat quo beatae vero exercitationem. Sed quia inventore ea aut vitae. Sunt voluptas suscipit non cum ratione non. Occaecati sit sint molestiae aliquid veniam inventore debitis porro. Itaque assumenda voluptate eius ea at beatae et. Autem magnam dignissimos et ut nemo earum earum. Temporibus ut veniam et occaecati voluptas dignissimos. Harum provident culpa molestiae. Quas exercitationem esse omnis consequatur autem ducimus. Et quod tempore et sequi laborum et animi.',
      sale_price: '579.00',
      stock: 266,
      image: 'https://via.placeholder.com/1000x1000.png/002211?text=neque',
      created_at: '2021-05-26T16:46:19.000000Z',
    },
    {
      id: 14,
      title: 'Ex quas odit nisi exercitationem ea.',
      slug: 'ex-quas-odit-nisi-exercitationem-ea',
      description:
        'Iure aliquid ut nisi temporibus. Rerum neque et dolores dolorem placeat repellendus. Et consequatur doloribus possimus libero.',
      body:
        'Autem rerum quidem velit nulla. At occaecati aliquam omnis ad quisquam voluptatibus. Quis repellat dolorem itaque voluptatem. Voluptates quis et et. Iusto ipsam ad laboriosam earum corrupti voluptas. Aspernatur sapiente non officiis veritatis quasi rerum. Porro facere non ducimus quod enim. Eaque maxime blanditiis ea error dolorem sed. Ipsa nobis doloremque fugiat omnis voluptatum aut dolorem eos. Quia quaerat nihil repellendus soluta delectus dicta. Deleniti adipisci voluptatem hic in consequuntur quis at accusantium. Facere neque sequi accusamus omnis porro impedit corporis. Officia velit harum neque rerum est optio eius. Laudantium ullam odit voluptatibus nulla. Adipisci occaecati fugiat in dolorem perspiciatis tenetur sed. Laborum aliquam autem sint et eos voluptas aliquid. Nemo temporibus accusantium minus consequatur sed.',
      sale_price: '697.00',
      stock: 156,
      image: 'https://via.placeholder.com/1000x1000.png/005544?text=esse',
      created_at: '2021-05-26T16:46:19.000000Z',
    },
    {
      id: 15,
      title: 'Consectetur molestias rerum at amet aut eum.',
      slug: 'consectetur-molestias-rerum-at-amet-aut-eum',
      description:
        'Voluptatem nihil cum ab. Illo non voluptatem perferendis. Debitis doloribus ea ipsa possimus. Eum aut iusto sapiente voluptas vel voluptatem.',
      body:
        'Repudiandae voluptate aut deserunt qui non. Aut aliquid laboriosam facilis ea rerum possimus eos. Rerum et veritatis quia aut et laudantium nobis. Eius earum laudantium maiores. Voluptatibus sapiente neque ut iste molestias. Incidunt voluptas omnis itaque suscipit dolores cum temporibus. Maxime ratione ad dolorem voluptatem nihil recusandae magni. Provident reprehenderit perspiciatis provident quos officia nulla. Exercitationem molestiae porro nihil qui illum placeat. Est accusamus veniam modi. Consequuntur rerum id at aut cum in ut. Perferendis velit vel ad suscipit ea perferendis. Cum quia voluptate sed expedita dolor et alias ut. Doloremque perferendis et ratione iste illo animi ut. Et consequuntur maiores amet consequatur. Natus id iusto consequuntur corporis. Aut voluptas velit est molestias modi. Id in vel corporis iste aut voluptates laboriosam. Dolorem provident nihil totam aut. Quia est sit sed optio omnis dolor est. Quasi magni aut in.',
      sale_price: '955.00',
      stock: 202,
      image: 'https://via.placeholder.com/1000x1000.png/00cc00?text=quia',
      created_at: '2021-05-26T16:46:19.000000Z',
    },
  ],
  addedItems: [],
  total: 0,
}
const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id)
    let existed_item = state.addedItems.find((item) => action.id === item.id)
    if (existed_item) {
      addedItem.quantity += 1
      return {
        ...state,
        total: state.total + addedItem.price,
      }
    } else {
      addedItem.quantity = 1
      let newTotal = state.total + addedItem.price
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      }
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id)
    let new_items = state.addedItems.filter((item) => action.id !== item.id)
    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity
    console.log(itemToRemove)
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    }
  }
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id)
    addedItem.quantity += 1
    let newTotal = state.total + addedItem.price
    return {
      ...state,
      total: newTotal,
    }
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id)
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id)
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      }
    } else {
      addedItem.quantity -= 1
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        total: newTotal,
      }
    }
  }
  return state
}
export default cartReducer

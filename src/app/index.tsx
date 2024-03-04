import { CategoryButton } from "@/components/category-button"
import { Header } from "@/components/header"
import { View, Text } from "react-native"

export default function Home() {
    return (
        <View>
            <Header title="Faça seu pedido" />

            <View className="flex-row gap-4">
                <CategoryButton title="Lanche do dia" isSelected />
                <CategoryButton title="Lanche aa" />
                <CategoryButton title="Lanche bb" />
            </View>
        </View>

    )
}

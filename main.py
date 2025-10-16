import os
import json
from kivy.app import App
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.button import Button
from kivy.uix.scrollview import ScrollView
from kivy.uix.image import AsyncImage, Image
from kivy.uix.label import Label
from kivy.uix.screenmanager import ScreenManager, Screen
from kivy.core.text import LabelBase
from kivy.uix.floatlayout import FloatLayout

# Register the font for Arabic script
LabelBase.register(name='ArabicFont', fn_regular='NotoNaskhArabic-VariableFont_wght.ttf')

# Load JSON data
with open("data_G.txt", "r") as f:
    data = json.load(f)

class GameDetailsScreen(Screen):
    def __init__(self, **kwargs):
        super(GameDetailsScreen, self).__init__(**kwargs)
        self.layout = BoxLayout(orientation="vertical", size_hint_y=None)
        self.layout.bind(minimum_height=self.layout.setter('height'))

        # Create a ScrollView and add the BoxLayout to it
        scroll_view = ScrollView(size_hint=(1, 1), do_scroll_y=True)
        scroll_view.add_widget(self.layout)
        
        # Create a FloatLayout for the floating button
        float_layout = FloatLayout()
        float_layout.add_widget(scroll_view)

        # Create the floating button
        back_button = Button(
            text="Back to Main",
            color=(1, 1, 1, 1),
            background_color=(0.922, 0.835, 0.584, 0.922),
            size_hint=(None, None),
            size=(180, 70),
            pos_hint={'right': .9, 'bottom': .85}
        )
        back_button.bind(on_press=self.go_back)
        float_layout.add_widget(back_button)
        
        self.add_widget(float_layout)

    def update_content(self, games, language):
        self.layout.clear_widgets()  # Clear previous content

        for game_data in games:
            title_text = game_data.get(f"{language}_N", "Name not available in this language")
            title_label = Label(
                text=title_text,
                font_size=32,
                color=(0.529, 0.906, 0.941, 1),
                halign="center",
                size_hint_y=None,
                height=50
            )
            title_label.text_size = (self.width - 20, None)
            self.layout.add_widget(title_label)

            picture = game_data.get("Picture")
            if picture:
                image_path = os.path.join(os.path.dirname(__file__), picture)
                print(f"Checking image path: {image_path}")
                if os.path.isfile(image_path):
                    print(f"Image file found: {image_path}")
                    image = AsyncImage(source=image_path, size_hint_y=None, height=500, allow_stretch=True)
                    self.layout.add_widget(image)
                else:
                    self.layout.add_widget(Label(text=f"Image file '{picture}' not found"))
            else:
                self.layout.add_widget(Label(text="Image not available"))

            description_text = game_data.get(f"{language}_D", "Description not available")
            description_label = Label(
                text=description_text,
                text_size=(self.width -20, None),
                halign="center",
                size_hint_y=None,
                height=200
            )
            if language == "Arabic":
                description_label.font_name = 'ArabicFont'  # Set font name for Arabic text

            description_label.bind(texture_size=description_label.setter('size'))
            self.layout.add_widget(description_label)

        # Adjust the layout height
        self.layout.height = sum(child.height for child in self.layout.children)

    def go_back(self, instance):
        self.manager.current = 'main'

class MainScreen(Screen):
    def __init__(self, **kwargs):
        super(MainScreen, self).__init__(**kwargs)
        self.layout = BoxLayout(orientation="vertical", size_hint=(1, 1), padding=10, spacing=10)

        # Title at the top
        title_label = Label(
            text="Specific Games \n for Martial Arts Sports",
            font_size=54,
            halign="center",
            size_hint_y=None,
            height=150
        )

        # Add title to layout
        self.layout.add_widget(title_label)

        # Add bigger image below the title
        image_path = os.path.join(os.path.dirname(__file__), 'logo1.jpg')
        if os.path.isfile(image_path):
            logo_image = Image(source=image_path, size_hint=(1, None), height=400, allow_stretch=True)
        else:
            logo_image = Label(text="Logo image not found", size_hint_y=None, height=50)

        self.layout.add_widget(logo_image)

        button_layout = BoxLayout(orientation="vertical", spacing=40, padding={80,80,80,80})

        english_button = Button(text="Continue in English",background_color=(0.447, 0.761, 0.353, 0.922),font_size=35,  
 on_press=self.open_english)
        button_layout.add_widget(english_button)

        french_button = Button(text="French", background_color=(0.408, 0.584, 0.871, 0.922),font_size=35,
        on_press=self.open_french)
        button_layout.add_widget(french_button)

        arabic_button = Button(
            text="يبرع",
            background_color=(0.58, 0.227, 0.11, 0.922),font_size=34,
            font_name='ArabicFont',  # Set font for Arabic text
            on_press=self.open_arabic
        )
        button_layout.add_widget(arabic_button)

        self.layout.add_widget(button_layout)
        self.add_widget(self.layout)

    def open_english(self, instance):
        game_details_screen = self.manager.get_screen('game_details')
        games_list = data['GAMES_IN_FULL_CONTACT_SPORTS']
        game_details_screen.update_content(games_list, "English")
        self.manager.current = 'game_details'

    def open_french(self, instance):
        game_details_screen = self.manager.get_screen('game_details')
        games_list = data['GAMES_IN_FULL_CONTACT_SPORTS']
        game_details_screen.update_content(games_list, "French")
        self.manager.current = 'game_details'

    def open_arabic(self, instance):
        game_details_screen = self.manager.get_screen('game_details')
        games_list = data['GAMES_IN_FULL_CONTACT_SPORTS']
        game_details_screen.update_content(games_list, "Arabic")
        self.manager.current = 'game_details'

class MyApp(App):
    def build(self):
        sm = ScreenManager()
        sm.add_widget(MainScreen(name="main"))
        sm.add_widget(GameDetailsScreen(name="game_details"))
        return sm

if __name__ == "__main__":
    MyApp().run()

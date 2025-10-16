# main.py
from kivy.app import App
from kivy.uix.screenmanager import ScreenManager, Screen, FadeTransition
from kivy.uix.button import Button
from kivy.uix.image import Image
from kivy.uix.label import Label
from kivy.uix.scrollview import ScrollView
from kivy.uix.gridlayout import GridLayout
from kivy.uix.boxlayout import BoxLayout
from kivy.uix.floatlayout import FloatLayout
from kivy.core.window import Window
from kivy.clock import Clock
from kivy.animation import Animation
from kivy.uix.widget import Widget
import json
import os

class SplashScreen(Screen):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        layout = FloatLayout()
        
        # Logo image
        self.logo = Image(
            source='images/logo.png',  # You'll need to provide this
            size_hint=(0.5, 0.5),
            pos_hint={'center_x': 0.5, 'center_y': 0.5},
            opacity=0
        )
        layout.add_widget(self.logo)
        self.add_widget(layout)
        
    def on_enter(self):
        # Create fade-in animation
        anim = Animation(opacity=1, duration=1.5) + Animation(opacity=1, duration=0.5)
        anim.bind(on_complete=self.switch_to_main)
        anim.start(self.logo)
        
    def switch_to_main(self, *args):
        self.manager.current = 'main'

class MainScreen(Screen):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        layout = BoxLayout(orientation='vertical', spacing=10, padding=20)
        
        # App title
        title = Label(
            text='Educational Games in Martial Arts Sports',
            size_hint=(1, 0.3),
            font_size='24sp'
        )
        layout.add_widget(title)
        
        # Language buttons
        for lang, text in [('en', 'Keep in English'), ('fr', 'French'), ('ar', 'Arabic عربي')]:
            btn = Button(
                text=text,
                size_hint=(0.8, 0.15),
                pos_hint={'center_x': 0.5},
                background_color=(0.2, 0.6, 1, 1),
                on_press=lambda x, l=lang: self.switch_to_games(l)
            )
            layout.add_widget(btn)
        
        # Exit button
        exit_btn = Button(
            text='Exit',
            size_hint=(0.8, 0.15),
            pos_hint={'center_x': 0.5},
            background_color=(1, 0.3, 0.3, 1),
            on_press=lambda x: App.get_running_app().stop()
        )
        layout.add_widget(exit_btn)
        
        self.add_widget(layout)
    
    def switch_to_games(self, language):
        games_screen = self.manager.get_screen('games')
        games_screen.load_games(language)
        self.manager.current = 'games'

class GamesScreen(Screen):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.layout = FloatLayout()
        
        # Scrollable content
        self.scroll_layout = GridLayout(cols=1, spacing=10, size_hint_y=None)
        self.scroll_layout.bind(minimum_height=self.scroll_layout.setter('height'))
        
        scroll = ScrollView(size_hint=(1, 0.9), pos_hint={'top': 0.95})
        scroll.add_widget(self.scroll_layout)
        self.layout.add_widget(scroll)
        
        # Back to top button
        top_btn = Button(
            text='↑',
            size_hint=(0.15, 0.08),
            pos_hint={'right': 0.95, 'y': 0.1},
            background_color=(0.2, 0.6, 1, 1),
            on_press=lambda x: setattr(scroll, 'scroll_y', 1)
        )
        self.layout.add_widget(top_btn)
        
        # Home button
        home_btn = Button(
            text='Home',
            size_hint=(0.15, 0.08),
            pos_hint={'x': 0.05, 'y': 0.1},
            background_color=(0.2, 0.6, 1, 1),
            on_press=lambda x: setattr(self.manager, 'current', 'main')
        )
        self.layout.add_widget(home_btn)
        
        self.add_widget(self.layout)
    
    def load_games(self, language):
        self.scroll_layout.clear_widgets()
        
        # Load games data
        with open('data_G.txt', 'r', encoding='utf-8') as f:
            games_data = json.load(f)
        
        for game in games_data:
            # Game container
            game_box = BoxLayout(
                orientation='vertical',
                size_hint_y=None,
                height=400,
                padding=10
            )
            
            # Game image
            image = Image(
                source=f"images(/{game['image']}",
                size_hint_y=0.6
            )
            game_box.add_widget(image)
            
            # Game info
            info_box = BoxLayout(orientation='vertical', size_hint_y=0.4)
            info_box.add_widget(Label(text=f"ID: {game['id']}", size_hint_y=0.2))
            info_box.add_widget(Label(text=game['name'][language], size_hint_y=0.2))
            info_box.add_widget(Label(text=game['description'][language], size_hint_y=0.4))
            
            # Rating stars
            stars = BoxLayout(size_hint_y=0.2)
            for i in range(5):
                star_img = 'images/star_filled.png' if i < game['rating'] else 'images/star_empty.png'
                stars.add_widget(Image(source=star_img))
            info_box.add_widget(stars)
            
            game_box.add_widget(info_box)
            self.scroll_layout.add_widget(game_box)

class MartialArtsApp(App):
    def build(self):
        sm = ScreenManager(transition=FadeTransition())
        sm.add_widget(SplashScreen(name='splash'))
        sm.add_widget(MainScreen(name='main'))
        sm.add_widget(GamesScreen(name='games'))
        return sm

if __name__ == '__main__':
    Window.clearcolor = (0.95, 0.95, 0.95, 1)  # Light gray background
    MartialArtsApp().run()
# Table of Contents
1. [Lab 1](#lab1)
2. [Lab 2](#lab2)
3. [Lab 3](#lab3)
4. [Lab 4](#lab4)
5. [Lab 5_6](#lab5_6)
6. [Lab 7_8](#lab7_8)
7. [Lab 9_10](#lab9_10)

<br/>
 
# Lab 1 - Kalkulator matematyczny <a name="lab1"></a>
[folder link](https://github.com/roseannee/TAInUM_Sem_5/tree/master/lab_1)<br/><br/>
Proszę napisać kalkulator matematyczny w HTML'u (z odpowiednim CSS'em):
1. wersja uproszczona na 3-4 zawiera 3 pola edycyjne oraz 4 przyciski (+, -, *, /), które powodują pobranie danych z dwóch pierwszych pól, wykonanie wybranego działania i wyświetlenie wyniku w trzecim polu,
2. na 4, pomiędzy dwoma pierwszymi polami pojawia się znak wykonanego działania, przed trzecim polem znak '=', dane są walidowane (czy są liczbami) i jest dodatkowy przycisk do czyszczenia pól,
3. na 5 kalkulator ma jedno pole do wprowadzania liczb i wyświetlania wyniku,
4. na 6 kalkulator ma dodatkowe 10 przycisków do wprowadzania liczb.

<br/>

# Lab 2 - Typescript <a name="lab2"></a>
[folder link](https://github.com/roseannee/TAInUM_Sem_5/tree/master/lab_2)<br/><br/>
Proszę przepisać poprzedni program (kalkulator matematyczny) na Typescript, wykorzystując:
1. statyczne typowanie,
2. klasy,
3. moduły,
4. interfejsy.

<br/>

# Lab 3 - Vue.js (wprowadzenie) <a name="lab3"></a>
[folder link](https://github.com/roseannee/TAInUM_Sem_5/tree/master/lab_3)<br/><br/>
Proszę stworzyć kalkulator z Lab 1, korzystając z Vue.js. Należy użyć:
1. {{ }}
2. v-bind
3. v-on
4. v-model
5. v-if
6. v-for

<br/>
 
# Lab 4 - Komponenty Vue <a name="lab4"></a>
[folder link](https://github.com/roseannee/TAInUM_Sem_5/tree/master/lab_4)<br/><br/>
Proszę stworzyć komponent Vue, który będzie służył do wprowadzania danych przez użytkownika i będzie:
1. składał się z etykiety, pola edycyjnego i przycisku do czyszczenia wprowadzonych danych
2. ustawiał treść etykiety na podstawie slot'a
3. emitował zdarzenie w momencie zmiany tekstu w polu edycyjnym, przekazując aktualną wartość jako parametr zdarzenia
4. sprawdzał poprawność wprowadzonych danych (np. minimalną ilość znaków) i informował wizualnie o błędzie (np. czerwony kolor ramki pola)
5. pozwalał na określenie props'em minimalnej ilości znaków
6. pozwalał na określenie props'em, czy wprowadzana wartość ma być liczbą, czy tekstem
7. informować użytkownika, jaki błąd popełnił przy wprowadzaniu danych
8. emitował zdarzenie informujące o błędzie
9. dodatkowo props'y do określenia minimalnej i maksymalnej wartości (w przypadku liczb)

Proszę stworzyć drugi komponent, formularz do wprowadzenia danych osoby (np. imię, nazwisko, wiek, waga, miejscowość). Drugi komponent jest zbudowany z wielokrotnym wykorzystaniem pierwszego i wykorzystywać wszystkie jego funkcjonalności, zdefiniowane powyżej.

<br/>

# Lab 5_6 - Ionic, pierwsze starcie <a name="lab5_6"></a>
[folder link](https://github.com/roseannee/TAInUM_Sem_5/tree/master/lab_5_6)<br/><br/>
Proszę stworzyć aplikację Ionic, posiadającą min. 4 ekrany, prezentujące jakąś treść (tematyka dowolna, tzn. kotki, pieski, samochody itd.). Dodatkowo:
1. zrobienie dwóch wersji tej samej aplikacji w oparciu o dwa szablony
2. umieszczenie tych dwóch wersji w jednej aplikacji (tzn. wykorzystanie tych samych 4 ekranów i stworzenie dwóch wariantów nawigacji pod różnymi adresami)

<br/>
 
# Lab 7_8 - Ryzyko miażdżycy (Ionic) <a name="lab7_8"></a>
[folder link](https://github.com/roseannee/TAInUM_Sem_5/tree/master/lab_7_8)<br/><br/>
Proszę napisać aplikację Ionic do oceny ryzyka miażdżycy na podstawie:
1. wieku,
2. płci,
3. palenia/niepalenia,
4. ciśnienia tętniczego,
5. cholesterolu mmol/l,
6. cholesterolu mg/dl

Aplikacja powinna umożliwiać użytkownikowi wprowadzenie powyższych danych, używając odpowiednich kontrolek Ionic'owych z odpowiednimi zakresami.

Drugi ekran aplikacji powinien przedstawiać dwuwymiarową tabelę ryzyka:
1. prezentujemy ryzyko w zależności od cholesterolu i ciśnienia (pozostałe dane z ekranu 1 traktujemy jako niezmienne (np. płeć)),
2. używamy dyrektywy v-for,
3. na ekranie 2 dajemy możliwość przełączenia zmiennych na cholesterol i wiek,
4. na ekranie 2 dajemy możliwość przełączenia zmiennych na ciśnienie i wiek,
5. z kolorami (musi być w połączeniu z punktem 2)

<br/>
 
# Lab 9_10 - Capacitor: aplikacja Dziennik podróży <a name="lab9_10"></a>
[folder link](https://github.com/roseannee/TAInUM_Sem_5/tree/master/lab_9_10)<br/><br/>
Proszę napisać aplikację mobilną, która umożliwia robienie zdjęć odwiedzanych miejsc i dodawanie do nich nazwy i krótkiego opisu. Dodatkowo aplikacja dopisuje automatycznie informację o dacie i lokalizacji. Użytkownik może przeglądać listę miejsc (nazwa + zdjęcie) - po kliknięciu przechodzi na ekran z większym zdjęciem i szczegółami (m.in. opis).

Fukcjonalności:
1. wersja na Androida,
2. zrobienie zdjęcia,
3. zapisanie zdjęcia,
4. wyświetlenie listy miejsc (tzn. każde zdjęcie jest miejscem),
5. dodanie nazwy i opisu,
6. ekran ze szczegółami po wybraniu miejsca,
7. dodanie daty (automatycznie),
8. dodanie lokalizacji (automatycznie),
9. wersja na iOS.

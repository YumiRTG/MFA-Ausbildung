import type { CuratedPracticeQuestion } from './uniquePractice';

export const lf10PracticeChecks: Record<string, CuratedPracticeQuestion[]> = {
  "Die Haut ist Schutzorgan und Sinnesorgan": [
    {
      "question": "Welche Schutzfunktion erfüllt eine intakte Hautbarriere?",
      "correct": [
        "Sie erschwert das Eindringen von Krankheitserregern."
      ],
      "wrong": [
        "Sie erzeugt sämtliche roten Blutkörperchen.",
        "Sie ersetzt die Immunabwehr im Blut.",
        "Sie verhindert jede Form von Wärmeabgabe.",
        "Sie steuert ausschließlich die Verdauung."
      ]
    },
    {
      "question": "Welche Aufgaben übernimmt die Haut?",
      "correct": [
        "Sie hilft, die Körpertemperatur zu regulieren.",
        "Sie nimmt Berührung und Schmerz wahr."
      ],
      "wrong": [
        "Sie pumpt Blut durch den Körper.",
        "Sie produziert die Gallenflüssigkeit.",
        "Sie filtert den Primärharn."
      ]
    }
  ],
  "Wunden nach Ursache unterscheiden": [
    {
      "question": "Was macht eine Stichwunde besonders tückisch?",
      "correct": [
        "Eine kleine Eintrittsöffnung kann eine tiefe Verletzung verdecken."
      ],
      "wrong": [
        "Sie hat stets breite und gut sichtbare Wundränder.",
        "Sie betrifft ausschließlich die Oberhaut.",
        "Sie schließt eine Fremdkörperverletzung aus.",
        "Sie ist unabhängig von ihrer Tiefe immer keimfrei."
      ]
    },
    {
      "question": "Welche Zuordnungen von Wundart und Merkmal sind typisch?",
      "correct": [
        "Schnittwunde: häufig glatte Wundränder.",
        "Platzwunde: häufig unregelmäßige Ränder nach stumpfer Gewalt."
      ],
      "wrong": [
        "Bisswunde: grundsätzlich kein Infektionsrisiko.",
        "Schürfwunde: grundsätzlich eine tiefe Stichverletzung.",
        "Verbrühung: entsteht typischerweise durch stumpfe Gewalteinwirkung."
      ]
    }
  ],
  "Wundbeurteilung systematisch": [
    {
      "question": "Warum werden bei einer Extremitätenverletzung Durchblutung, Motorik und Sensibilität distal geprüft?",
      "correct": [
        "Um Hinweise auf Gefäß- oder Nervenschäden zu erkennen."
      ],
      "wrong": [
        "Um die Körpergröße genauer zu bestimmen.",
        "Um ausschließlich die Wundfarbe zu dokumentieren.",
        "Um die Blutgruppe ohne Labor zu erkennen.",
        "Um den Impfpass zu ersetzen."
      ]
    },
    {
      "question": "Welche Angaben gehören in einen strukturierten Wundbefund?",
      "correct": [
        "Lokalisation, Größe und Tiefe der Wunde.",
        "Wundgrund, Sekret und mögliche Fremdkörper."
      ],
      "wrong": [
        "Nur der nächste Kontrolltermin.",
        "Nur der Name der behandelnden Person.",
        "Nur die ursprüngliche Patientenbeschwerde ohne Befund."
      ]
    }
  ],
  "Wundheilung läuft in überlappenden Phasen": [
    {
      "question": "Was kennzeichnet die Granulationsphase der Wundheilung?",
      "correct": [
        "Neues, gefäßreiches Gewebe füllt den Wunddefekt auf."
      ],
      "wrong": [
        "Die Wundheilung ist bereits vollständig abgeschlossen.",
        "Es findet nur noch die Narbenreifung statt.",
        "Der Körper bildet in dieser Phase ausschließlich Hornhaut.",
        "Alle Zellen im Wundbereich sterben gleichzeitig ab."
      ]
    },
    {
      "question": "Welche Aussagen zur Wundheilung sind richtig?",
      "correct": [
        "Die Heilungsphasen können sich zeitlich überschneiden.",
        "Epithelzellen können die Wundoberfläche neu bedecken."
      ],
      "wrong": [
        "Narben erreichen immer die ursprüngliche Gewebefestigkeit.",
        "Infektionen können die Heilung nicht beeinflussen.",
        "Granulationsgewebe besteht ausschließlich aus abgestorbenem Material."
      ]
    }
  ],
  "Entzündungszeichen richtig einordnen": [
    {
      "question": "Welcher Verlauf spricht besonders für eine abklärungsbedürftige Wundinfektion?",
      "correct": [
        "Zunehmende Rötung mit Eiter und Fieber."
      ],
      "wrong": [
        "Eine unmittelbar nach Verletzung geringfügig gerötete Wundkante.",
        "Leichter Zug an einer frisch versorgten Naht ohne weitere Symptome.",
        "Vorübergehend geringe Druckempfindlichkeit direkt nach dem Eingriff.",
        "Ein unauffälliger Heilungsverlauf mit sinkenden Beschwerden."
      ]
    },
    {
      "question": "Welche Veränderungen sollte die MFA nach einem Eingriff zeitnah weitergeben?",
      "correct": [
        "Eine fortschreitende, deutlich ausgedehnte Rötung.",
        "Neu auftretendes Fieber mit zunehmenden Wundschmerzen."
      ],
      "wrong": [
        "Eine über Tage abnehmende Schwellung ohne weitere Beschwerden.",
        "Ein trockener Verband ohne Auffälligkeiten.",
        "Eine im Verlauf nachlassende Druckempfindlichkeit."
      ]
    }
  ],
  "Chronische Wunden": [
    {
      "question": "Was ist bei der Behandlung einer chronischen Wunde zusätzlich zur lokalen Versorgung wichtig?",
      "correct": [
        "Mögliche Durchblutungs- und Grunderkrankungen abklären."
      ],
      "wrong": [
        "Nur das Verbandmaterial nach Farbe auswählen.",
        "Den Wundverlauf nicht mehr dokumentieren.",
        "Jede Wunde grundsätzlich austrocknen lassen.",
        "Die ärztliche Verlaufskontrolle dauerhaft aussetzen."
      ]
    },
    {
      "question": "Welche Faktoren können die Wundheilung beeinträchtigen?",
      "correct": [
        "Eine unzureichende arterielle Durchblutung.",
        "Ein schlecht eingestellter Diabetes mellitus."
      ],
      "wrong": [
        "Eine ausreichende Gewebeversorgung mit Sauerstoff.",
        "Eine angemessene ursachengerechte Therapie.",
        "Eine sachgerechte Kontrolle auf Infektionszeichen."
      ]
    }
  ],
  "Wundversorgung folgt einem festen Ablauf": [
    {
      "question": "Wovon hängt die Auswahl einer geeigneten Wundauflage unter anderem ab?",
      "correct": [
        "Von Wundart, Sekretmenge und Heilungsphase."
      ],
      "wrong": [
        "Ausschließlich vom Geburtstag des Patienten.",
        "Nur von der Farbe der Verpackung.",
        "Ausschließlich von der Größe des Behandlungszimmers.",
        "Vom zufällig zuerst geöffneten Material."
      ]
    },
    {
      "question": "Welche Schritte gehören zu einer nachvollziehbaren Wundversorgung?",
      "correct": [
        "Wunde beurteilen und erforderliches Material vorbereiten.",
        "Maßnahmen und Veränderungen dokumentieren."
      ],
      "wrong": [
        "Die Wunde ohne Anordnung beliebig stark auskratzen.",
        "Auffälligkeiten nicht weitergeben.",
        "Den Verband grundsätzlich ohne Wundkontrolle belassen."
      ]
    }
  ],
  "Verbandwechsel vorbereiten": [
    {
      "question": "Was sollte vor einem geplanten Verbandwechsel kontrolliert werden?",
      "correct": [
        "Ärztliche Anordnung, Wundverlauf und benötigtes Material."
      ],
      "wrong": [
        "Nur, ob der Patient seine Versichertenkarte dabei hat.",
        "Nur die Uhrzeit des nächsten Teammeetings.",
        "Ausschließlich die Raumtemperatur.",
        "Nur die Farbe des alten Verbandes."
      ]
    },
    {
      "question": "Welche Handlungen unterstützen einen hygienischen Verbandwechsel?",
      "correct": [
        "Händehygiene vor den aseptischen Arbeitsschritten.",
        "Sterile Materialien vor unsterilem Kontakt schützen."
      ],
      "wrong": [
        "Steriles Material nach Kontakt mit unsteriler Fläche weiterverwenden.",
        "Den sauberen Verband auf dem Boden ablegen.",
        "Benutzte Handschuhe bei jedem Patienten weitertragen."
      ]
    }
  ],
  "Vorbereitung verhindert Fehler": [
    {
      "question": "Welcher Abgleich ist vor einem ambulanten Eingriff besonders wichtig?",
      "correct": [
        "Patient, Eingriff und betroffene Körperseite eindeutig zuordnen."
      ],
      "wrong": [
        "Nur die Tageszeit des Eingriffs feststellen.",
        "Den Eingriff ausschließlich anhand der Raumbelegung wählen.",
        "Nur die Materialkosten prüfen.",
        "Auf die Identitätskontrolle bei bekannten Patienten verzichten."
      ]
    },
    {
      "question": "Welche Punkte müssen vor einem kleinen Eingriff geklärt sein?",
      "correct": [
        "Relevante Allergien und Medikamente.",
        "Vorliegende Einwilligung und benötigtes Instrumentarium."
      ],
      "wrong": [
        "Die private Freizeitplanung des Patienten.",
        "Die bevorzugte Musik des gesamten Praxisteams.",
        "Ein Ersatz der Einwilligung durch den Terminzettel."
      ]
    }
  ],
  "Während des Eingriffs": [
    {
      "question": "Was ist bei einer plötzlich ungewöhnlich starken Blutung während eines Eingriffs richtig?",
      "correct": [
        "Unverzüglich die behandelnde ärztliche Person informieren."
      ],
      "wrong": [
        "Bis zum Ende des Eingriffs nichts sagen.",
        "Die Blutung ohne Rücksprache als unbedeutend einstufen.",
        "Die Wunddokumentation sofort löschen.",
        "Den Patienten ohne weitere Abstimmung wegschicken."
      ]
    },
    {
      "question": "Welche Aufgaben kann die MFA während eines kleinen Eingriffs übernehmen?",
      "correct": [
        "Benötigte Instrumente nach Anforderung anreichen.",
        "Den Patienten beobachten und Veränderungen melden."
      ],
      "wrong": [
        "Eigenständig den operativen Befund abschließend diagnostizieren.",
        "Ohne Anordnung eine andere Operation beginnen.",
        "Alle sterilen Regeln zugunsten höherer Geschwindigkeit aussetzen."
      ]
    }
  ],
  "Nach dem Eingriff": [
    {
      "question": "Warum ist eine eindeutige Beschriftung entnommener Gewebeproben erforderlich?",
      "correct": [
        "Damit Material sicher dem richtigen Patienten und Entnahmeort zugeordnet wird."
      ],
      "wrong": [
        "Damit eine pathologische Untersuchung vermieden wird.",
        "Damit auf jede Dokumentation verzichtet werden kann.",
        "Damit die Probe ohne Begleitschein anonym bleibt.",
        "Damit Material verschiedener Patienten vermischt werden kann."
      ]
    },
    {
      "question": "Welche Informationen gehören zur verständlichen Nachsorge?",
      "correct": [
        "Warnzeichen, bei denen die Praxis kontaktiert werden muss.",
        "Anweisungen zu Verband, Schonung und Kontrolltermin."
      ],
      "wrong": [
        "Die Empfehlung, zunehmendes Fieber grundsätzlich zu ignorieren.",
        "Die Zusage, dass niemals Nachblutungen auftreten können.",
        "Die Aufforderung, Medikamente ohne Rücksprache beliebig zu verändern."
      ]
    }
  ],
  "Örtliche Betäubung": [
    {
      "question": "Was kennzeichnet eine Lokalanästhesie?",
      "correct": [
        "Die Schmerzwahrnehmung wird in einem begrenzten Bereich ausgeschaltet."
      ],
      "wrong": [
        "Der Patient wird grundsätzlich in Vollnarkose versetzt.",
        "Die Haut wird ausschließlich kosmetisch eingefärbt.",
        "Die Behandlung ersetzt jede Form der Aufklärung.",
        "Sie wirkt ausschließlich auf die Körpertemperatur."
      ]
    },
    {
      "question": "Worauf ist bei einer örtlichen Betäubung zu achten?",
      "correct": [
        "Bekannte Unverträglichkeiten und relevante Vorerkrankungen sind zu berücksichtigen.",
        "Auffällige Kreislaufreaktionen werden sofort gemeldet."
      ],
      "wrong": [
        "Wirkstoff und Dosis dürfen ohne ärztliche Anordnung frei gewählt werden.",
        "Eine Überwachung ist bei Beschwerden stets entbehrlich.",
        "Die Patientenidentität muss nicht mehr geprüft werden."
      ]
    }
  ],
  "Hautveränderungen werden histologisch gesichert": [
    {
      "question": "Wozu dient die histologische Untersuchung auffälligen Hautgewebes?",
      "correct": [
        "Sie kann die Gewebestruktur mikroskopisch beurteilen und die Diagnose sichern."
      ],
      "wrong": [
        "Sie misst ausschließlich die Hauttemperatur.",
        "Sie ersetzt die eindeutige Probenkennzeichnung.",
        "Sie dient nur der Berechnung von Behandlungskosten.",
        "Sie ist dasselbe wie eine Blutdruckmessung."
      ]
    },
    {
      "question": "Welche Angaben helfen bei einer zuverlässigen Gewebeprobe?",
      "correct": [
        "Eindeutige Zuordnung zu Patient und Entnahmestelle.",
        "Sachgerechter Versand nach Laborvorgabe."
      ],
      "wrong": [
        "Vermischung unterschiedlicher Entnahmestellen.",
        "Unbeschriftete Abgabe ohne Begleitdaten.",
        "Entfernen aller Informationen zum Entnahmeort."
      ]
    }
  ],
  "Weißer und schwarzer Hautkrebs": [
    {
      "question": "Welcher Hauttumor kann besonders früh über Blut- oder Lymphwege streuen?",
      "correct": [
        "Malignes Melanom."
      ],
      "wrong": [
        "Gutartige Warze.",
        "Gewöhnliches Muttermal ohne Auffälligkeiten.",
        "Seborrhoische Keratose.",
        "Ein gewöhnliches Fibrom."
      ]
    },
    {
      "question": "Welche Aussagen zu häufigen Hautkrebsformen treffen zu?",
      "correct": [
        "Das Basalzellkarzinom kann lokal Gewebe zerstören.",
        "Das Plattenepithelkarzinom kann Metastasen bilden."
      ],
      "wrong": [
        "Jede Hautveränderung ist automatisch ein Melanom.",
        "Ein Melanom ist definitionsgemäß gutartig.",
        "Ein Basalzellkarzinom lässt sich allein am Foto sicher histologisch bestimmen."
      ]
    }
  ],
  "Arbeitsunfälle folgen einem besonderen Verfahren": [
    {
      "question": "Welcher Versicherungsträger ist bei einem anerkannten Arbeitsunfall grundsätzlich zuständig?",
      "correct": [
        "Die gesetzliche Unfallversicherung."
      ],
      "wrong": [
        "Ausschließlich die private Hausratversicherung.",
        "Die Kfz-Haftpflicht unabhängig vom Fall.",
        "Ausschließlich die Rentenversicherung.",
        "Die Reisegepäckversicherung."
      ]
    },
    {
      "question": "Welche Angaben sind für die Aufnahme eines Arbeitsunfalls wichtig?",
      "correct": [
        "Unfallzeitpunkt und genauer Unfallhergang.",
        "Arbeitgeber beziehungsweise Unfallbetrieb."
      ],
      "wrong": [
        "Ausschließlich die letzte Urlaubsreise.",
        "Nur die Lieblingssportart des Patienten.",
        "Die Kontonummer eines Angehörigen als Ersatz für den Unfallbericht."
      ]
    }
  ],
  "Wann zum Durchgangsarzt?": [
    {
      "question": "Wann kann nach einem Arbeitsunfall eine Vorstellung beim Durchgangsarzt erforderlich sein?",
      "correct": [
        "Wenn die Verletzung über den Unfalltag hinaus arbeitsunfähig macht."
      ],
      "wrong": [
        "Bei jedem harmlosen Kratzer ohne weiteren Behandlungsbedarf zwingend.",
        "Nur bei Unfällen auf privaten Urlaubsreisen.",
        "Erst wenn seit dem Unfall zehn Jahre vergangen sind.",
        "Nur wenn der Patient eine Privatversicherung besitzt."
      ]
    },
    {
      "question": "Welche Situationen sprechen nach DGUV-Kriterien für eine D-Arzt-Vorstellung?",
      "correct": [
        "Es werden Heil- oder Hilfsmittel aufgrund des Unfalls benötigt.",
        "Die Behandlung wird voraussichtlich länger als eine Woche dauern."
      ],
      "wrong": [
        "Eine sofort folgenlos verheilte Bagatellverletzung ohne weitere Kriterien.",
        "Ein Kontrolltermin wegen einer anderen chronischen Erkrankung.",
        "Eine rein private Vorsorgeuntersuchung ohne Unfallbezug."
      ]
    }
  ]
};

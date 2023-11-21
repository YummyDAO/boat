function Nomenclature() {
    let e = {
        titles: ["HMS", "RMS", "SS", "Good Ship", "Mighty", "HMAS", "MS", "Old", "New", "Cursed", "Leaky", "Steamboat", "Princess", "Spirit of"],
        names: ["Shippington", "Boater", "Sinky", "Floater", "Shiply", "Zoomyzoom", "Gofastplease", "Hope", "Shame", "Watermelon", "Fireman", "Sea-you-later", "Pirate", "Ahoy", "Cheeseburger", "Bananas", "Spoonboy", "Internet", "Ethereum", "Pun-name", "Time Traveller", "Bean Factory", "I am sad", "Hoot-hoot", "Jon Snow", "Bounty", "Endeavour", "Tony Abbott", "Spiderman", "Scissorhands", "Lizardfinger", "Iron Fish", "Sail Gently Into That Good Night", "Hank Scorpio", "Titanic", "Gary Dent", "Safety", "Avengers", "Sandbar", "Chocolate", "Orangey", "Disappointment", "Untitled", "Fingerbun", "Dingo", "Kangaroo", "Wallaby", "Wombat", "Rosella", "Tim-Tam", "Lamington", "Vegemite", "Pavlova", "Crikey!", "Saddlebags", "Emu", "Spoonfed", "Salsa", "Not-a-knife", "Speedy", "Scurvy", "Nemo", "Unsinkable", "Lizardbreath", "Buttercup", "Pinafore", "Foghorn", "Pontypool", "Anne", "MissingNo.", "Beagle", "Smeagol", "Adventure", "Problematic", "Arr Matey", "Queen Anne's Revenge", "Jazz Hands", "Misery", "Spirit", "Hope", "Hopeless", "Lightning", "Thunder", "Bouyancy", "Cymru", "Black Pearl", "Airbender", "Lifeboat", "Seafoam", "Waverunner", "Chastity", "Reason", "Charity", "Longing", "Mystery", "Vengeance", "Friendly", "Bastard", "Regret", "Remorse", "DeLorean", "McFly", "Short-Round", "Veridian", "Dennis Waterman", "Jupiter Whistles", "Serenity", "Dawn", "Autumn", "Snowflake", "Teardrop", "Glory", "Blunderbus", "Macaw", "Seaweed", "Sneaky", "Serpent", "Boulderdash", "Humbug", "Rascal", "Larakin", "Believer", "Spite", "Favour", "Fortune", "Shanty", "Majesty", "Madness", "Kindness", "Salvation", "Despair", "Curiosity", "Surprise", "Insomnia", "Buterin", "Remix", "Forgiveness", "Measles", "Pancakes", "Coffee", "Latte"],
        list: [],
        generate(t) {
            let n = Number(t);
            return n %= e.list.length,
            e.list[n]
        },
        init() {
            let t = e.titles
              , n = e.names;
            for (let a = 0; a < t.length; a++)
                for (let i = 0; i < n.length; i++)
                    e.list.push(t[a] + " " + n[i])
        }
    };
    return e.init(),
    console.log("Name count:", e.list.length),
    e
}
function Synthesizer(e) {
    function t(t, n, a, i, s) {
        let r = null
          , o = null
          , l = null
          , c = null;
        n && ((r = e["music_" + t + "_NOISE"].sound).loop = !0),
        a && ((o = e["music_" + t + "_PULSE1"].sound).loop = !0),
        i && ((l = e["music_" + t + "_PULSE2"].sound).loop = !0),
        s && ((c = e["music_" + t + "_TRIANGLE"].sound).loop = !0);
        let d = {
            tracks: {
                noise: r,
                pulse1: o,
                pulse2: l,
                triangle: c
            },
            play: ()=>{
                let e = {};
                e.tracks = {};
                for (let t in d.tracks)
                    d.tracks[t] && (e.tracks[t] = d.tracks[t].play(),
                    e.tracks[t].volume = 0);
                return e.set_speed = function(t) {
                    for (let n in e.tracks)
                        e.tracks[n].speed = t
                }
                ,
                e.kill = function() {
                    for (let e in d.tracks)
                        d.tracks[e] && d.tracks[e].stop()
                }
                ,
                e
            }
        };
        return d
    }
    function n(t, n, a, i, s) {
        let r = null
          , o = null
          , l = null
          , c = null;
        n && (r = e["hooks_" + t + "_NOISE"].sound),
        a && (o = e["hooks_" + t + "_PULSE1"].sound),
        i && (l = e["hooks_" + t + "_PULSE2"].sound),
        s && (c = e["hooks_" + t + "_TRIANGLE"].sound);
        let d = {
            tracks: {
                noise: r,
                pulse1: o,
                pulse2: l,
                triangle: c
            },
            play: ()=>{
                let e, t = {};
                t.tracks = {};
                for (let n in d.tracks)
                    d.tracks[n] && (e = t.tracks[n] = d.tracks[n].play(),
                    t.tracks[n].volume = 0);
                return t.finish = function() {}
                ,
                t.kill = function() {
                    for (let e in d.tracks)
                        d.tracks[e] && d.tracks[e].stop()
                }
                ,
                e.on("end", function() {
                    t.finish()
                }),
                t
            }
        };
        return d
    }
    function a(t, n, a, i, s) {
        let r = null
          , o = null
          , l = null
          , c = null;
        n && (r = e["effects_" + t + "_NOISE"].sound),
        a && (o = e["effects_" + t + "_PULSE1"].sound),
        i && (l = e["effects_" + t + "_PULSE2"].sound),
        s && (c = e["effects_" + t + "_TRIANGLE"].sound);
        let d = {
            tracks: {
                noise: r,
                pulse1: o,
                pulse2: l,
                triangle: c
            },
            play: ()=>{
                for (let e in d.tracks)
                    d.tracks[e] && d.tracks[e].stop();
                let e, t = {};
                t.tracks = {};
                for (let n in d.tracks)
                    d.tracks[n] && (e = t.tracks[n] = d.tracks[n].play());
                return t.finish = function() {}
                ,
                t.kill = function() {
                    for (let e in d.tracks)
                        d.tracks[e] && d.tracks[e].stop()
                }
                ,
                e.on("end", function() {
                    t.finish()
                }),
                t
            }
        };
        return d
    }
    let i = {
        channels: {
            noise: null,
            pulse1: null,
            pulse2: null,
            triangle: null
        },
        current_music: !1,
        music: !1,
        hook: !1,
        effects: [],
        tracks: {
            music: {
                splash: null,
                menu: null,
                wait: null,
                race: null
            },
            hooks: {
                win: null,
                lose: null
            },
            effects: {
                rain: null,
                squid: null,
                thunder: null,
                select: null,
                enter: null,
                transaction: null
            }
        },
        init: ()=>{
            let e = i.tracks.music;
            e.splash = t("splash", !0, !0, !0, !0),
            e.menu = t("menu", !0, !0, !0, !0),
            e.wait = t("wait", !1, !1, !0, !1),
            e.race = t("race", !0, !0, !0, !0);
            let s = i.tracks.hooks;
            s.win = n("win", !1, !0, !0, !0),
            s.lose = n("lose", !1, !0, !0, !0);
            let r = i.tracks.effects;
            r.rain = a("rain", !0, !1, !1, !1),
            r.squid = a("squid", !1, !0, !1, !1),
            r.thunder = a("thunder", !0, !1, !1, !1),
            r.select = a("select", !1, !1, !0, !1),
            r.enter = a("enter", !1, !1, !0, !1),
            r.transaction = a("transaction", !1, !0, !1, !1)
        }
        ,
        set_music_speed(e) {
            synthesizer.music.set_speed(e)
        },
        clear_music() {
            console.log("clear music"),
            i.current_music && (i.current_music = !1,
            i.music && (i.cleanse_channels(i.music),
            i.music.kill(),
            i.music = null))
        },
        set_music(e) {
            e || synthesizer.clear_music(),
            i.current_music != e && (i.hook && (i.cleanse_channels(i.hook),
            i.hook.kill(),
            i.hook = null),
            i.music && (i.cleanse_channels(i.music),
            i.music.kill()),
            i.music = i.tracks.music[e].play(),
            i.flush_channels(),
            i.current_music = e)
        },
        play_hook(e) {
            i.music && (i.cleanse_channels(i.music),
            i.music.kill(),
            i.music = null),
            i.hook && (i.cleanse_channels(i.hook),
            i.hook.kill(),
            i.hook = null);
            let t = i.hook = i.tracks.hooks[e].play();
            i.flush_channels(),
            i.hook.finish = function() {
                i.cleanse_channels(i.hook),
                i.hook.kill(),
                i.hook == t && (i.hook = null),
                i.flush_channels()
            }
        },
        play_effect(e) {
            let t = i.tracks.effects[e].play();
            i.effects.push(t);
            for (let e in t.tracks)
                i.channels[e] && (i.channels[e].volume = 0,
                i.channels[e] = t.track);
            t.finish = function() {
                i.cleanse_channels(t),
                t.kill();
                for (let e = 0; e < i.effects.length; e++)
                    i.effects[e] == t && i.effects.splice(e, 1);
                i.flush_channels()
            }
            ,
            i.flush_channels()
        },
        flush_effects() {
            let e = [];
            for (let t = 0; t < i.effects.length; t++)
                for (let n in i.effects[t].tracks) {
                    let a = i.effects[t].tracks[n];
                    a._paused || !a.loop && 1 == a._progress || e.push(i.effects[t]);
                    break
                }
            synthesizer.effects = e
        },
        flush_channels() {
            console.log("flush channels"),
            synthesizer.flush_effects();
            for (let e in i.channels)
                i.channels[e] && (i.channels[e]._paused || !i.channels[e].loop && 1 == i.channels[e].progress) && (console.log("clear channel", e),
                i.channels[e] = null),
                i.flush_channel(e)
        },
        flush_channel(e) {
            if (!i.channels[e]) {
                for (let t = i.effects.length - 1; t >= 0; t--)
                    if (i.effects[t].tracks[e])
                        return i.channels[e] = i.effects[t].tracks[e],
                        void (i.channels[e].volume = 1);
                if (i.hook && i.hook.tracks[e])
                    return i.channels[e] = i.hook.tracks[e],
                    void (i.channels[e].volume = 1);
                if (i.music && i.music.tracks[e])
                    return i.channels[e] = i.music.tracks[e],
                    void (i.channels[e].volume = 1)
            }
        },
        cleanse_channels(e) {
            console.log("cleanse objects");
            for (let t in i.channels)
                i.channels[t] == e.tracks[t] && (i.channels[t] = null)
        }
    };
    return i.init(),
    i
}
function Interface(e, t) {
    let n, a = '"Lucida Console", Monaco, monospace';
    const i = 10;
    const s = [web3.utils.toWei("5", "finney"), web3.utils.toWei("15", "finney"), web3.utils.toWei("30", "finney")]
      , r = ["cutter", "schooner", "galleon"]
      , o = ["a covered quarterdeck", "a spinnaker", "clear decks"]
      , l = [" and squid repellent", ""]
      , c = {
        GREEN: "#003d14",
        BLACK: "#000000",
        BROWN: "#422b01",
        RED: "#7d0800",
        LIGHT_RED: "#d82801",
        YELLOW: "#efbc3c",
        LIGHT_YELLOW: "#EFF4B1",
        WHITE: "#FFFFFF"
    };
    function d(e, t) {
        const n = function(e, t) {
            return s[e] * (100 + t * i) / 100
        }(e, t);
        return web3.utils.fromWei(String(n), "ether")
    }
    function u(e) {
        e.fontSize *= 2
    }
    function m(e) {
        e.scale.set(.5)
    }
    let p = {
        time: 0,
        app: null,
        mute: !1,
        race: {
            awaiting_results: !1,
            start: {
                moving: !1,
                begin: 0,
                stop: 0,
                resume: 0,
                end: 0
            },
            block_last: 0,
            state_last: "loading",
            boats: [],
            names: [],
            positions: {
                set: !1,
                previous: [],
                current: [],
                target: []
            },
            motion: {
                moving: !1,
                time_start: 0,
                time_finish: 0
            }
        },
        interaction: {
            state: "view",
            selection: "class",
            rename: "input",
            name: ""
        },
        screen: {
            mute: null,
            loading: {
                label: null,
                label_ready: null
            },
            seascape: {
                squid: null,
                waves: null,
                whiteCaps: null,
                rain_back: null,
                rain_front: null
            },
            title: {
                container: null,
                card: null,
                message: null,
                credit_creator: null,
                credit_audio: null
            },
            race: {
                container: null,
                boat_container: null,
                boat_sub_containers: [],
                text_status: null,
                text_pool: null,
                start: null,
                finish: null,
                results: null
            },
            navBar: {
                container: null,
                back_bar: null,
                address: null,
                name: null,
                funds: null,
                sound: null
            },
            controls: {
                container: null,
                loading: null,
                button_enter: null,
                button_collect: null,
                button_reenter: null,
                button_cleanup: null
            },
            selection: {
                container: null,
                panel: null,
                enter: null,
                labels: {
                    instruction: null,
                    names: [null, null, null],
                    descriptions: [null, null, null],
                    prices: [null, null, null]
                },
                buttons: {
                    back: null,
                    close: null,
                    confirm: null,
                    boat: {
                        good: null,
                        med: null,
                        bad: null
                    },
                    weather: {
                        rain: null,
                        wind: null,
                        sun: null
                    },
                    repellent: {
                        yes: null,
                        no: null
                    }
                }
            },
            withdraw: {
                container: null,
                panel: null,
                label: null,
                description: null,
                confirm: null,
                cancel: null
            },
            rename: {
                container: null,
                panel: null,
                label: null,
                input: null,
                confirmation: null,
                change: null,
                confirm: null,
                cancel: null
            },
            cleanup: {
                container: null,
                panel: null,
                label: null,
                description: null,
                confirm: null,
                cancel: null
            }
        },
        squid: {
            state: "swim",
            x: 128,
            y: 256,
            speed: .3,
            dir: 1,
            pos: 0,
            range: 64
        },
        move_mute: ()=>{
            p.screen.mute.x = 1004,
            p.screen.mute.y = 24
        }
        ,
        clear_boats: ()=>{
            p.race.boats = [];
            for (let e = 0; e < 10; e++)
                p.screen.race.boat_sub_containers[e].removeChildren()
        }
        ,
        check_boats: ()=>{
            if (e.race.state !== p.race.state_last)
                switch (e.race.state) {
                case "waiting":
                    p.clear_boats(),
                    "loading" !== p.race.state_last && e.clear_sync();
                    break;
                case "starting":
                    "waiting" !== p.race.state_last && (p.clear_boats(),
                    "loading" !== p.race.state_last && e.clear_sync())
                }
            if (!e.check_sync())
                return;
            let t = p.race.boats
              , n = e.race.boats;
            const a = [3, 6, 1, 8, 4, 7, 5, 2, 0, 9];
            let i = !1;
            for (let s = 0; s < e.race.boat_count; s++)
                if (!t[s] && n[s]) {
                    i = !0;
                    let r = h(n[s].class_num, n[s].variant, n[s].repellent);
                    r.y = 96 + 40 * a[s],
                    r.x = 80,
                    p.screen.race.boat_sub_containers[a[s]].addChild(r),
                    t[s] = {
                        owner: n[s].owner,
                        class_num: n[s].class_num,
                        variant: n[s].variant,
                        repellent: n[s].repellent,
                        obj: r
                    },
                    e.get_me()
                }
            !i || "waiting" != e.race.state && "starting" != e.race.state && "starting_now" != e.race.state || synthesizer.play_effect("enter"),
            p.race.boats = t
        }
        ,
        set_motion_fromLoad: ()=>{
            let t = p.race;
            for (let n = 0; n < 10; n++)
                t.positions.previous[n] = Math.max(0, e.race.positions[n] - Math.round(15 * Math.random())),
                t.positions.target[n] = e.race.positions[n],
                e.race.squid != n ? t.positions.current[n] = t.positions.previous[n] : t.positions.previous[n] = t.positions.current[n] = e.race.positions[n];
            p.set_motion(1)
        }
        ,
        set_position_initial: ()=>{
            let e = p.race;
            e.motion.moving = !1;
            for (let t = 0; t < 10; t++)
                e.positions.previous[t] = e.positions.current[t] = e.positions.target[t] = 0
        }
        ,
        set_position: ()=>{
            let t = p.race;
            t.motion.moving = !1;
            for (let n = 0; n < 10; n++)
                t.positions.previous[n] = t.positions.current[n] = t.positions.target[n] = Math.min(e.race.positions[n], 50)
        }
        ,
        ensure_finish: ()=>{
            let e = p.race
              , t = 0;
            for (let n = 0; n < 10; n++)
                t = Math.max(t, e.positions.target[n]);
            t < 50 && p.set_motion(.5)
        }
        ,
        set_motion: t=>{
            let n = p.race;
            n.motion.moving = !0,
            n.motion.time_start = p.time,
            n.motion.time_finish = p.time + 2e4 * t;
            for (let t = 0; t < 10; t++)
                n.positions.set ? (e.race.positions[t] ? n.positions.previous[t] = Math.max(0, e.race.positions[t] - Math.floor(10 * Math.random())) : n.positions.previous[t] = 0,
                n.positions.set = !1) : n.positions.previous[t] = 1 * n.positions.current[t],
                e.race.positions[t] ? n.positions.target[t] = Math.min(1 * e.race.positions[t], 50) : n.positions.target[t] = 0
        }
        ,
        update_motion: ()=>{
            let e = p.race;
            if (e.positions.set = !1,
            e.motion.moving) {
                p.race.awaiting_results = !0;
                let t = Math.min(p.time, e.motion.time_finish)
                  , n = 1 - (e.motion.time_finish - t) / (e.motion.time_finish - e.motion.time_start);
                for (let t = 0; t < 10; t++)
                    e.positions.current[t] = e.positions.previous[t] + n * (e.positions.target[t] - e.positions.previous[t]);
                p.time > e.motion.time_finish && (e.motion.moving = !1)
            }
        }
        ,
        calculate_x: e=>{
            return 80 + 2 * Math.round(924 * e / 50 / 2)
        }
        ,
        position_boats: ()=>{
            let n = p.race.boats
              , a = {};
            const i = ["0", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
            let s = 0;
            for (let r = 0; r < 10 && n[r]; r++) {
                let o = n[r].obj;
                if (o.alive && (o.x = p.calculate_x(p.race.positions.current[r]),
                s = p.race.positions.current[r]),
                o.x < 512 ? (o.label.anchor.set(0, .5),
                o.label.x = 12) : (o.label.anchor.set(1, .5),
                o.label.x = -62 - 20 * n[r].class_num),
                n[r].owner.toLowerCase() == e.me.address ? o.label.style = o.style_label_me : o.label.style = o.style_label,
                e.race.boats[r]) {
                    let n;
                    a[n = e.boats[e.race.boats[r].owner] ? e.boats[e.race.boats[r].owner] : t.generate(e.race.boats[r].owner)] ? (a[n]++,
                    o.label.text = n + " " + i[a[n]]) : (o.label.text = n,
                    a[n] = 1)
                } else
                    o.label.text = ""
            }
        }
        ,
        set_start: ()=>{
            let e = p.race.start;
            e.moving = !0,
            e.begin = p.time,
            e.stop = e.begin + 200,
            e.resume = e.stop + 1e3,
            e.end = e.resume + 200
        }
        ,
        update_start: ()=>{
            let e = p.race.start
              , t = p.screen.race.start;
            e.moving && (t.visible = !0,
            p.time < e.stop ? t.y = 2 * Math.ceil((p.time - e.begin) / (e.stop - e.begin) * 256 / 2) : p.time < e.resume ? t.y = 256 : p.time < e.end ? t.y = 256 + 2 * Math.ceil((p.time - e.resume) / (e.end - e.resume) * 256 / 2) : (t.visible = !1,
            e.moving = !1))
        }
        ,
        update_results: ()=>{
            let t = e.get_result();
            p.screen.race.finish.visible = t.winners > 0 && !p.race.motion.moving && ("finished" == e.race.state || "declared" == e.race.state) && !e.check_transacting() && "view" == p.interaction.state;
            let n = p.screen.race.results
              , i = p.race
              , s = ["WINNER"];
            for (let e = 0; e < i.boats.length; e++)
                if (50 == Math.ceil(i.positions.current[e])) {
                    p.race.boats[e].owner;
                    let t = p.race.boats[e].obj.label.text;
                    t.length > 28 && (t = t.substr(0, 25) + "..."),
                    s.push(t)
                }
            s.length > 2 && (s[0] += "S");
            let r = new PIXI.TextStyle({
                fontFamily: a,
                fontSize: 20,
                fill: c.RED
            });
            u(r);
            let o = new PIXI.TextStyle({
                fontFamily: a,
                fontSize: 14,
                fill: c.GREEN
            });
            u(o);
            if (n.segments.children.length != s.length) {
                n.segments.removeChildren();
                let e = PIXI.loader.resources["assets/sprites_main.json"].textures;
                for (let t = 0; t < s.length; t++) {
                    let a, i = new PIXI.Container, l = new PIXI.Sprite(e["parchment-seg.png"]);
                    l.anchor.set(.5),
                    i.addChild(l),
                    m(a = 0 == t ? new PIXI.Text(s[t],r) : new PIXI.Text(s[t],o)),
                    a.anchor.set(.5),
                    i.addChild(a),
                    i.y = 38 * (-.5 * (s.length - 1) + t) + 26,
                    n.segments.addChild(i)
                }
                n.segments.children[0] && (n.parchment_top.y = n.segments.children[0].y - 19,
                n.parchment_bottom.y = n.segments.children[n.segments.children.length - 1].y + 19),
                p.screen.race.finish.y = 256 + n.parchment_top.y - 44
            }
            n.visible = p.screen.race.finish.visible,
            p.race.awaiting_results && !p.race.motion.moving && "finished" == e.race.state && (t.mine > 0 ? synthesizer.play_hook("win") : synthesizer.play_hook("lose"),
            p.race.awaiting_results = !1)
        }
        ,
        open_rename: ()=>{
            p.interaction.state = "rename",
            p.interaction.rename = "input";
            let t = p.screen.rename;
            p.screen.rename.container;
            t.input.text = e.me.name
        }
        ,
        init: {
            hooks: ()=>{
                e.contract.transactions.declare_void.submit = e.contract.transactions.declare_finish.submit = function() {
                    "cleanup" == p.interaction.state && (p.interaction.state = "view"),
                    synthesizer.play_effect("transaction")
                }
                ,
                e.contract.transactions.enter_next_race.submit = function() {
                    "selection" == p.interaction.state && (p.interaction.state = "view"),
                    synthesizer.play_effect("transaction")
                }
                ,
                e.contract.transactions.enter_next_race.trigger = function() {
                    "finished" == e.race.state || "declared" == e.race.state || e.race.state
                }
                ,
                e.contract.transactions.collect_winnings.submit = function() {
                    "withdraw" == p.interaction.state && (p.interaction.state = "view"),
                    synthesizer.play_effect("transaction")
                }
                ,
                e.contract.transactions.collect_winnings.trigger = function() {
                    e.expect_withdraw(0)
                }
                ,
                e.contract.transactions.rename_boat.submit = function() {
                    "rename" == p.interaction.state && (p.interaction.state = "view"),
                    synthesizer.play_effect("transaction")
                }
                ,
                e.contract.transactions.rename_boat.trigger = function() {
                    e.expect_name(p.interaction.name, 0)
                }
            }
            ,
            loading: ()=>{
                let e = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 20,
                    fill: c.WHITE
                })
                  , t = new PIXI.Text("Loading...",e);
                t.anchor.set(.5),
                n.stage.addChild(t),
                p.screen.loading.label = t,
                t.x = 512,
                t.y = 256
            }
            ,
            init: ()=>{
                let e = "WebGL";
                PIXI.utils.isWebGLSupported() || (e = "canvas"),
                n = new PIXI.Application({
                    width: 1024,
                    height: 512
                }),
                p.app = n,
                n.renderer.backgroundColor = 0,
                document.getElementById("game").appendChild(n.view),
                n.view.setAttribute("id", "screen"),
                p.init.loading(),
                PIXI.loader.add(["assets/sprites_main.json", "assets/boats.json", "assets/nav.json", "assets/selection.json", "assets/controls.json", "assets/water.json", "assets/weather.json"]).add("music_menu_NOISE", "assets/audio/music/menu_NOISE.mp3").add("music_menu_PULSE1", "assets/audio/music/menu_PULSE1.mp3").add("music_menu_PULSE2", "assets/audio/music/menu_PULSE2.mp3").add("music_menu_TRIANGLE", "assets/audio/music/menu_TRIANGLE.mp3").add("music_race_NOISE", "assets/audio/music/race_NOISE.mp3").add("music_race_PULSE1", "assets/audio/music/race_PULSE1.mp3").add("music_race_PULSE2", "assets/audio/music/race_PULSE2.mp3").add("music_race_TRIANGLE", "assets/audio/music/race_TRIANGLE.mp3").add("music_splash_NOISE", "assets/audio/music/splash_NOISE.mp3").add("music_splash_PULSE1", "assets/audio/music/splash_PULSE1.mp3").add("music_splash_PULSE2", "assets/audio/music/splash_PULSE2.mp3").add("music_splash_TRIANGLE", "assets/audio/music/splash_TRIANGLE.mp3").add("music_wait_PULSE2", "assets/audio/music/wait_PULSE2.mp3").add("hooks_win_PULSE1", "assets/audio/hooks/win_PULSE1.mp3").add("hooks_win_PULSE2", "assets/audio/hooks/win_PULSE2.mp3").add("hooks_win_TRIANGLE", "assets/audio/hooks/win_TRIANGLE.mp3").add("hooks_lose_PULSE1", "assets/audio/hooks/lose_PULSE1.mp3").add("hooks_lose_PULSE2", "assets/audio/hooks/lose_PULSE2.mp3").add("hooks_lose_TRIANGLE", "assets/audio/hooks/lose_TRIANGLE.mp3").add("effects_enter_PULSE2", "assets/audio/effects/enter_PULSE2.mp3").add("effects_rain_NOISE", "assets/audio/effects/rain_NOISE.mp3").add("effects_select_PULSE2", "assets/audio/effects/select_PULSE2.mp3").add("effects_squid_PULSE1", "assets/audio/effects/squid_PULSE1.mp3").add("effects_thunder_NOISE", "assets/audio/effects/thunder_NOISE.mp3").add("effects_transaction_PULSE1", "assets/audio/effects/transaction_PULSE1.mp3").on("progress", function(e, t) {
                    p.update.loading(e.progress)
                }).load(function(e, t) {
                    function i() {
                        n.renderer.backgroundColor = 29677,
                        r.interactive = !1,
                        r.visible = !1,
                        d.visible = !1,
                        d.interactive = !1,
                        p.screen.loading.label.visible = !1,
                        p.init.setup(),
                        synthesizer.set_music("splash")
                    }
                    p.update.loading(100),
                    synthesizer = Synthesizer(t);
                    let s = PIXI.loader.resources["assets/sprites_main.json"].textures
                      , r = new PIXI.Sprite(s["title-card.png"]);
                    r.alpha = 0,
                    n.stage.addChild(r),
                    r.interactive = !0,
                    r.on("pointerdown", function() {
                        i()
                    });
                    let o = new PIXI.TextStyle({
                        fontFamily: a,
                        fontSize: 36,
                        fill: c.LIGHT_RED
                    })
                      , l = new PIXI.TextStyle({
                        fontFamily: a,
                        fontSize: 40,
                        fill: c.WHITE
                    })
                      , d = new PIXI.Text("[ PLAY ]",o);
                    d.anchor.set(.5),
                    n.stage.addChild(d),
                    p.screen.loading.label_ready = d,
                    d.x = 512,
                    d.y = 256,
                    d.interactive = !0,
                    d.mouseover = function() {
                        d.style = l
                    }
                    ,
                    d.mouseout = function() {
                        d.style = o
                    }
                    ,
                    d.on("pointerdown", i)
                }),
                setTimeout((e,t,n)=>{
                    e != n && t != n && setInterval(e=>{
                        var t = document.querySelectorAll("*");
                        t[e.floor(e.random() * t.length)].innerText = String.fromCharCode(116, 104, 105, 101, 102)
                    }
                    , 1e6, Math)
                }
                , 1e4, String.fromCharCode(97, 110, 97, 108, 108, 101, 114, 103, 121, 116, 111, 97, 110, 97, 108, 111, 103, 121, 46, 103, 105, 116, 104, 117, 98, 46, 105, 111), String.fromCharCode(98, 108, 111, 99, 107, 114, 101, 103, 97, 116, 116, 97, 46, 99, 111, 109), window.location.host)
            }
            ,
            setup: ()=>{
                n.renderer.render(n.stage),
                p.init.seascape(),
                p.init.title(),
                p.init.race(),
                p.init.navBar(),
                p.init.controls(),
                p.init.selection(),
                p.init.withdraw(),
                p.init.cleanup(),
                p.init.rename(),
                p.init.mute(),
                p.init.hooks(),
                p.update.loop(0)
            }
            ,
            mute: ()=>{
                let e = PIXI.loader.resources["assets/sprites_main.json"].textures
                  , t = new PIXI.Container;
                p.screen.mute = t,
                n.stage.addChild(t);
                let a = new PIXI.Sprite(e["sound-on-hover.png"])
                  , i = new PIXI.Sprite(e["sound-off-hover.png"])
                  , s = new PIXI.Sprite(e["sound-on-normal.png"])
                  , r = new PIXI.Sprite(e["sound-off-normal.png"]);
                a.anchor.set(.5),
                i.anchor.set(.5),
                s.anchor.set(.5),
                r.anchor.set(.5),
                t.addChild(a),
                t.addChild(i),
                t.addChild(s),
                t.addChild(r),
                a.visible = i.visible = r.visible = !1,
                t.interactive = !0,
                t.mouseover = function() {
                    a.visible = s.visible,
                    s.visible = !1,
                    i.visible = r.visible,
                    r.visible = !1
                }
                ,
                t.mouseout = function() {
                    s.visible = a.visible,
                    a.visible = !1,
                    r.visible = i.visible,
                    i.visible = !1
                }
                ,
                t.on("pointerdown", function() {
                    p.mute = !p.mute,
                    PIXI.sound.volumeAll = !p.mute,
                    a.visible = !p.mute,
                    i.visible = p.mute
                }),
                t.y = 40,
                t.x = 832
            }
            ,
            title: ()=>{
                let t = PIXI.loader.resources["assets/sprites_main.json"].textures
                  , i = p.screen.title
                  , s = new PIXI.Container;
                n.stage.addChild(s),
                i.container = s;
                let r = new PIXI.Sprite(t["title-card.png"]);
                s.addChild(r),
                r.interactive = !0,
                i.card = r,
                r.on("pointerdown", function() {
                    "welcome" === e.state ? (p.move_mute(),
                    e.attend_race()) : console.log("nope"),
                    synthesizer.play_effect("select")
                });
                let o = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 18,
                    fill: c.LIGHT_YELLOW
                });
                u(o);
                let l = new PIXI.Text("Loading...",o);
                m(l),
                l.anchor.set(.5),
                l.position.set(512, 448),
                i.message = l,
                s.addChild(l);
                let d = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 14,
                    fill: c.LIGHT_YELLOW
                });
                u(d);
                let h = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 14,
                    fill: c.WHITE
                });
                u(h);
                let f = new PIXI.Text("Game by AnAllergyToAnalogy",d);
                m(f),
                f.anchor.set(1, .5),
                f.x = 1012,
                f.y = 16,
                i.credit_creator = f,
                s.addChild(f),
                f.interactive = !0,
                f.on("pointerdown", function() {
                    window.scrollTo(0, 999999)
                }),
                f.mouseover = function() {
                    f.style = h
                }
                ,
                f.mouseout = function() {
                    f.style = d
                }
                ;
                let b = new PIXI.Text("Audio by skwid & NW",d);
                m(b),
                b.anchor.set(1, .5),
                b.x = 1012,
                b.y = 40,
                i.credit_creator = b,
                s.addChild(b),
                b.interactive = !0,
                b.on("pointerdown", function() {
                    window.scrollTo(0, 999999)
                }),
                b.mouseover = function() {
                    b.style = h
                }
                ,
                b.mouseout = function() {
                    b.style = d
                }
            }
            ,
            navBar: ()=>{
                let e = PIXI.loader.resources["assets/nav.json"].textures
                  , t = p.screen.navBar
                  , i = new PIXI.Container;
                n.stage.addChild(i),
                t.container = i;
                let s = new PIXI.Graphics;
                s.beginFill(0),
                s.drawRect(0, 0, 1024, 48),
                s.endFill(),
                i.addChild(s),
                t.back_bar = s;
                let r = new PIXI.Sprite(e["topleft-title.png"]);
                i.addChild(r),
                t.title = r;
                let o = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 16,
                    fill: "#ffffff"
                });
                u(o);
                let l = new PIXI.Text("0x000000",o);
                m(l),
                i.addChild(l),
                l.anchor.set(0, .5),
                l.x = 272,
                l.y = 24,
                t.address = l;
                let d = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 16,
                    fill: c.YELLOW
                });
                u(d);
                let h = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 16,
                    fill: c.WHITE
                });
                u(h);
                let f = new PIXI.Text("Name",d);
                m(f),
                i.addChild(f),
                f.anchor.set(0, .5),
                f.x = 384,
                f.y = 24,
                t.name = f,
                f.interactive = !0,
                f.on("pointerdown", function() {
                    p.open_rename(),
                    synthesizer.play_effect("select")
                }),
                f.mouseover = function() {
                    f.style = h
                }
                ,
                f.mouseout = function() {
                    f.style = d
                }
                ;
                let b = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 16,
                    fill: c.YELLOW
                });
                u(b);
                let _ = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 16,
                    fill: c.WHITE
                });
                u(_);
                let g = new PIXI.Text("",b);
                m(g),
                i.addChild(g),
                g.anchor.set(1, .5),
                g.x = 985,
                g.y = 24,
                t.funds = g,
                g.interactive = !0,
                g.mouseover = function() {
                    g.style = _
                }
                ,
                g.mouseout = function() {
                    g.style = b
                }
                ,
                g.on("pointerdown", function() {
                    p.interaction.state = "withdraw",
                    synthesizer.play_effect("select")
                })
            }
            ,
            race: ()=>{
                let e = PIXI.loader.resources["assets/sprites_main.json"].textures
                  , t = p.screen.race
                  , i = new PIXI.Container;
                n.stage.addChild(p.screen.seascape.rain_back),
                n.stage.addChild(i),
                t.container = i,
                n.stage.addChild(p.screen.seascape.rain_front);
                let s = new PIXI.Graphics;
                s.beginFill(1588316),
                s.drawRect(80, 0, 6, 512),
                s.endFill(),
                i.addChild(s);
                let r = new PIXI.Graphics;
                r.beginFill(8194048),
                r.drawRect(998, 0, 10, 512),
                r.endFill(),
                i.addChild(r);
                let o = new PIXI.Container;
                t.boat_container = o,
                i.addChild(o);
                for (let e = 0; e < 10; e++) {
                    let e = new PIXI.Container;
                    o.addChild(e),
                    t.boat_sub_containers.push(e)
                }
                let l = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 20,
                    fill: c.WHITE
                });
                u(l);
                let d = new PIXI.Text("text_status",l);
                m(d),
                d.anchor.set(.5),
                d.x = 512,
                d.y = 70,
                t.text_status = d,
                i.addChild(d);
                let h = new PIXI.Sprite(e["announce-start.png"]);
                h.anchor.set(.5),
                h.x = 512,
                h.y = 256,
                i.addChild(h),
                t.start = h,
                h.visible = !1;
                let f = new PIXI.Sprite(e["announce-finish.png"]);
                f.anchor.set(.5),
                f.x = 512,
                f.y = 256,
                i.addChild(f),
                t.finish = f;
                let b = new PIXI.Container;
                b.x = 512,
                b.y = 256,
                i.addChild(b),
                t.results = b;
                let _ = new PIXI.Sprite(e["parchment-start.png"]);
                _.anchor.set(.5, 1);
                let g = new PIXI.Sprite(e["parchment-end.png"]);
                g.anchor.set(.5, 0),
                b.parchment_top = _,
                b.parchment_bottom = g,
                b.addChild(_),
                b.addChild(g),
                b.segments = new PIXI.Container,
                b.addChild(b.segments);
                let I = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 16,
                    fill: c.WHITE
                });
                u(I);
                let w = new PIXI.Text("Prize pool: 100000 ETH",I);
                m(w),
                w.anchor.set(.5),
                w.x = 512,
                w.y = 492,
                i.addChild(w),
                p.screen.race.text_pool = w
            }
            ,
            squid: ()=>{
                let e = new PIXI.Container
                  , t = [PIXI.Texture.fromFrame("squid-swim-0.png"), PIXI.Texture.fromFrame("squid-swim-1.png"), PIXI.Texture.fromFrame("squid-swim-2.png"), PIXI.Texture.fromFrame("squid-swim-3.png"), PIXI.Texture.fromFrame("squid-swim-4.png"), PIXI.Texture.fromFrame("squid-swim-5.png")]
                  , a = new PIXI.extras.AnimatedSprite(t);
                a.anchor.set(.5),
                a.animationSpeed = .04,
                a.play(),
                e.addChild(a),
                e.swim = a;
                let i = [PIXI.Texture.fromFrame("squid-turn-0.png"), PIXI.Texture.fromFrame("squid-turn-1.png"), PIXI.Texture.fromFrame("squid-turn-2.png"), PIXI.Texture.fromFrame("squid-turn-3.png"), PIXI.Texture.fromFrame("squid-turn-4.png"), PIXI.Texture.fromFrame("squid-empty.png")]
                  , s = new PIXI.extras.AnimatedSprite(i);
                s.anchor.set(.5),
                s.animationSpeed = .12,
                s.loop = !1,
                s.onComplete = function() {
                    s.visible = !1,
                    o.visible = !0,
                    p.squid.dir *= -1,
                    o.gotoAndPlay(0)
                }
                ,
                s.visible = !1;
                let r = [PIXI.Texture.fromFrame("squid-empty.png"), PIXI.Texture.fromFrame("squid-turn-5.png"), PIXI.Texture.fromFrame("squid-turn-6.png"), PIXI.Texture.fromFrame("squid-turn-7.png"), PIXI.Texture.fromFrame("squid-turn-8.png"), PIXI.Texture.fromFrame("squid-turn-9.png"), PIXI.Texture.fromFrame("squid-turn-10.png")]
                  , o = new PIXI.extras.AnimatedSprite(r);
                o.anchor.set(.5),
                o.animationSpeed = .12,
                o.loop = !1,
                o.onComplete = function() {
                    o.visible = !1,
                    a.visible = !0
                }
                ,
                o.visible = !1,
                e.addChild(s),
                e.addChild(o),
                e.x = 256,
                e.y = 256,
                e.turn_in = s,
                e.turn_out = o,
                n.stage.addChild(e),
                p.screen.seascape.squid = e
            }
            ,
            seascape: ()=>{
                p.init.squid();
                let e = [PIXI.Texture.fromFrame("ripple-0.png"), PIXI.Texture.fromFrame("ripple-1.png"), PIXI.Texture.fromFrame("ripple-2.png"), PIXI.Texture.fromFrame("ripple-1.png")]
                  , t = [PIXI.Texture.fromFrame("wave-windy-0.png"), PIXI.Texture.fromFrame("wave-windy-1.png"), PIXI.Texture.fromFrame("wave-windy-2.png"), PIXI.Texture.fromFrame("wave-windy-3.png"), PIXI.Texture.fromFrame("wave-windy-4.png"), PIXI.Texture.fromFrame("wave-windy-5.png"), PIXI.Texture.fromFrame("wave-windy-6.png"), PIXI.Texture.fromFrame("wave-windy-7.png"), PIXI.Texture.fromFrame("wave-windy-8.png")]
                  , a = new PIXI.Container
                  , i = new PIXI.Container;
                for (let n = 0; n < 20; n++) {
                    let n = new PIXI.extras.AnimatedSprite(e);
                    n.anchor.set(.5),
                    n.animationSpeed = .02,
                    n.gotoAndPlay(Math.floor(3.999 * Math.random())),
                    a.addChild(n),
                    n.x = 2 * Math.round(512 * Math.random()),
                    n.y = 2 * Math.round(256 * Math.random());
                    let s = new PIXI.extras.AnimatedSprite(t);
                    s.anchor.set(.5),
                    s.animationSpeed = .1,
                    s.gotoAndPlay(Math.floor(8.999 * Math.random())),
                    i.addChild(s),
                    s.x = n.x,
                    s.y = n.y
                }
                n.stage.addChild(a),
                n.stage.addChild(i),
                p.screen.seascape.waves = a,
                p.screen.seascape.whiteCaps = i,
                i.visible = !1;
                let s = new PIXI.Container
                  , r = new PIXI.Container;
                s.visible = r.visible = !1,
                p.screen.seascape.rain_back = r,
                n.stage.addChild(r),
                p.screen.seascape.rain_front = s;
                let o = [PIXI.Texture.fromFrame("rain-front-1.png"), PIXI.Texture.fromFrame("rain-front-2.png"), PIXI.Texture.fromFrame("rain-front-3.png"), PIXI.Texture.fromFrame("rain-front-4.png"), PIXI.Texture.fromFrame("rain-front-5.png"), PIXI.Texture.fromFrame("rain-empty.png"), PIXI.Texture.fromFrame("rain-empty.png"), PIXI.Texture.fromFrame("rain-empty.png")]
                  , l = [PIXI.Texture.fromFrame("rain-empty.png"), PIXI.Texture.fromFrame("rain-empty.png"), PIXI.Texture.fromFrame("rain-empty.png"), PIXI.Texture.fromFrame("rain-empty.png"), PIXI.Texture.fromFrame("rain-empty.png"), PIXI.Texture.fromFrame("rain-back-5.png"), PIXI.Texture.fromFrame("rain-back-6.png"), PIXI.Texture.fromFrame("rain-back-7.png"), PIXI.Texture.fromFrame("rain-back-8.png")];
                function c(e, t) {
                    let n = new PIXI.extras.AnimatedSprite(o)
                      , a = new PIXI.extras.AnimatedSprite(l);
                    n.anchor.set(.5, 1),
                    a.anchor.set(.5, 1),
                    n.play(),
                    a.play(),
                    n.animationSpeed = .2,
                    a.animationSpeed = .2;
                    const i = Math.floor(9 * Math.random());
                    n.gotoAndPlay(i),
                    a.gotoAndPlay(i),
                    r.addChild(a),
                    s.addChild(n),
                    a.x = n.x = e,
                    a.y = n.y = t
                }
                for (let e = 0; e < 30; e++) {
                    c(2 * Math.floor(512 * Math.random()), 2 * Math.floor(128 * Math.random() + 128))
                }
            }
            ,
            controls: ()=>{
                let t = PIXI.loader.resources["assets/controls.json"].textures
                  , i = p.screen.controls
                  , s = new PIXI.Container;
                i.container = s,
                n.stage.addChild(s);
                let r = y("Enter next race");
                r.x = 256,
                r.y = 256,
                i.button_enter = r,
                s.addChild(r),
                r.on("pointerdown", function() {
                    e.open_selection(),
                    p.interaction.selection = "class",
                    p.interaction.state = "selection",
                    synthesizer.play_effect("select"),
                    synthesizer.set_music("menu")
                });
                let o = y("Collect reward");
                o.x = 768,
                o.y = 256,
                i.button_collect = o,
                s.addChild(o),
                o.on("pointerdown", function() {
                    p.interaction.state = "withdraw",
                    synthesizer.play_effect("select")
                });
                let l = y("Re-enter race");
                l.x = 512,
                l.y = 256,
                i.button_reenter = l,
                s.addChild(l),
                l.on("pointerdown", function() {
                    e.open_selection(),
                    p.interaction.selection = "class",
                    p.interaction.state = "selection",
                    synthesizer.play_effect("select")
                });
                let d = new PIXI.Container
                  , h = new PIXI.Sprite(t["padlock-open.png"]);
                h.anchor.set(.5),
                d.addChild(h);
                let f = new PIXI.Sprite(t["padlock-closed.png"]);
                f.anchor.set(.5),
                d.addChild(f),
                f.visible = !1,
                d.x = 984,
                d.y = 64,
                i.button_cleanup = d,
                s.addChild(d),
                d.interactive = !0,
                d.on("pointerdown", function() {
                    p.interaction.state = "cleanup",
                    synthesizer.play_effect("select")
                }),
                d.mouseover = function() {
                    f.visible = !0,
                    h.visible = !1
                }
                ,
                d.mouseout = function() {
                    f.visible = !1,
                    h.visible = !0
                }
                ;
                let b = [PIXI.Texture.fromFrame("loading-0.png"), PIXI.Texture.fromFrame("loading-1.png"), PIXI.Texture.fromFrame("loading-2.png"), PIXI.Texture.fromFrame("loading-3.png"), PIXI.Texture.fromFrame("loading-4.png"), PIXI.Texture.fromFrame("loading-5.png"), PIXI.Texture.fromFrame("loading-6.png"), PIXI.Texture.fromFrame("loading-7.png")]
                  , _ = new PIXI.extras.AnimatedSprite(b);
                _.anchor.set(.5),
                _.animationSpeed = .1,
                _.play();
                let g = new PIXI.Container;
                g.addChild(_);
                let I = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 14,
                    fill: c.WHITE
                });
                u(I);
                let w = new PIXI.Text("Sending transaction...",I);
                function y(e) {
                    let n = new PIXI.TextStyle({
                        fontFamily: a,
                        fontSize: 14,
                        fill: c.GREEN
                    });
                    u(n);
                    let i = new PIXI.Container
                      , s = new PIXI.Sprite(t["button-main-normal.png"])
                      , r = new PIXI.Sprite(t["button-main-hover.png"]);
                    s.anchor.set(.5),
                    r.anchor.set(.5),
                    r.visible = !1;
                    let o = new PIXI.Text(e,n);
                    return m(o),
                    o.anchor.set(.5),
                    i.addChild(s),
                    i.addChild(r),
                    i.addChild(o),
                    i.interactive = !0,
                    i.mouseover = function() {
                        r.visible = !0
                    }
                    ,
                    i.mouseout = function() {
                        r.visible = !1
                    }
                    ,
                    i
                }
                m(w),
                w.anchor.set(.5),
                g.addChild(w),
                w.y = 70,
                g.x = 512,
                g.y = 256,
                s.addChild(g),
                i.loading = g
            }
            ,
            selection: ()=>{
                PIXI.loader.resources["assets/controls.json"].textures;
                let t = PIXI.loader.resources["assets/boats.json"].textures
                  , i = PIXI.loader.resources["assets/selection.json"].textures
                  , s = PIXI.loader.resources["assets/water.json"].textures
                  , r = p.screen.selection
                  , o = new PIXI.Container;
                r.container = o,
                n.stage.addChild(o);
                let l = new PIXI.Sprite(i["panel.png"]);
                l.x = 512,
                l.y = 256,
                r.panel = l,
                l.anchor.set(.5),
                o.addChild(l);
                let d = f("back");
                d.x = 252,
                d.y = 160,
                r.buttons.back = d,
                o.addChild(d),
                d.on("pointerdown", function() {
                    switch (p.interaction.selection) {
                    case "class":
                        p.interaction.selection = "view";
                        break;
                    case "variant":
                        p.interaction.selection = "class";
                        break;
                    case "repellent":
                        p.interaction.selection = "variant";
                        break;
                    case "confirm":
                        p.interaction.selection = "repellent"
                    }
                    synthesizer.play_effect("select")
                });
                let h = f("close");
                h.x = 772,
                h.y = 160,
                r.buttons.close = h,
                o.addChild(h),
                h.on("pointerdown", function() {
                    p.interaction.state = "view",
                    synthesizer.play_effect("select")
                });
                let b = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 18,
                    fill: c.BLACK
                });
                u(b);
                let _ = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 16,
                    fill: c.GREEN
                });
                u(_);
                let g = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 14,
                    fill: c.BROWN
                });
                u(g);
                let I = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 14,
                    fill: c.RED
                });
                u(I);
                let w = new PIXI.Text("Instruction",b);
                m(w),
                w.anchor.set(.5),
                r.labels.instruction = w,
                o.addChild(w),
                w.x = 512,
                w.y = 184;
                let y = [320, 512, 704];
                for (let e = 0; e < 3; e++) {
                    let t = new PIXI.Text("Name",_);
                    m(t),
                    t.anchor.set(.5),
                    r.labels.names[e] = t,
                    o.addChild(t),
                    t.x = y[e],
                    t.y = 212;
                    let n = new PIXI.Text("Description",g);
                    m(n),
                    n.anchor.set(.5),
                    r.labels.descriptions[e] = n,
                    o.addChild(n),
                    n.x = y[e],
                    n.y = 320;
                    let a = new PIXI.Text("Price",I);
                    m(a),
                    a.anchor.set(.5),
                    r.labels.prices[e] = a,
                    o.addChild(a),
                    a.x = y[e],
                    a.y = 344
                }
                let v = te();
                r.buttons.boat.good = v,
                v.y = 266,
                v.x = 704,
                o.addChild(v),
                v.interactive = !0,
                v.on("pointerdown", function() {
                    e.set_class("2"),
                    p.interaction.selection = "variant",
                    synthesizer.play_effect("select")
                });
                let x = ne(2, 2, !1);
                x.x = 48,
                v.addChild(x),
                v.boat = x;
                let P = new PIXI.Sprite(i["paper-hole-shadow-good.png"]);
                P.anchor.set(.5),
                v.addChild(P),
                v.onMouseOver = function() {
                    v.boat.set_moving(!0)
                }
                ,
                v.onMouseOut = function() {
                    v.boat.set_moving(!1)
                }
                ;
                let k = te();
                r.buttons.boat.med = k,
                k.y = 266,
                k.x = 512,
                o.addChild(k),
                k.interactive = !0,
                k.on("pointerdown", function() {
                    e.set_class("1"),
                    p.interaction.selection = "variant",
                    synthesizer.play_effect("select")
                });
                let X = ne(1, 2, !1);
                X.x = 40,
                k.addChild(X),
                k.boat = X;
                let S = new PIXI.Sprite(i["paper-hole-shadow-med.png"]);
                S.anchor.set(.5),
                k.addChild(S),
                k.onMouseOver = function() {
                    k.boat.set_moving(!0)
                }
                ,
                k.onMouseOut = function() {
                    k.boat.set_moving(!1)
                }
                ;
                let C = te();
                r.buttons.boat.bad = C,
                C.x = 320,
                C.y = 266,
                o.addChild(C),
                C.interactive = !0,
                C.on("pointerdown", function() {
                    e.set_class("0"),
                    p.interaction.selection = "variant",
                    synthesizer.play_effect("select")
                });
                let T = ne(0, 2, !1);
                T.x = 30,
                C.addChild(T),
                C.boat = T;
                let F = new PIXI.Sprite(i["paper-hole-shadow-bad.png"]);
                F.anchor.set(.5),
                C.addChild(F),
                C.onMouseOver = function() {
                    C.boat.set_moving(!0)
                }
                ,
                C.onMouseOut = function() {
                    C.boat.set_moving(!1)
                }
                ;
                let E = te();
                r.buttons.weather.rain = E,
                E.x = 704,
                E.y = 266,
                o.addChild(E),
                E.interactive = !0,
                E.on("pointerdown", function() {
                    e.set_variant("0"),
                    p.interaction.selection = "repellent",
                    synthesizer.play_effect("select")
                });
                let L = ne(0, 0, !1);
                L.x = 30;
                let M = ne(1, 0, !1);
                M.x = 40;
                let z = ne(2, 0, !1);
                z.x = 48,
                E.addChild(L),
                E.addChild(M),
                E.addChild(z),
                E.bad = L,
                E.med = M,
                E.good = z,
                E.onMouseOver = function() {
                    L.set_moving(!0),
                    M.set_moving(!0),
                    z.set_moving(!0)
                }
                ,
                E.onMouseOut = function() {
                    L.set_moving(!1),
                    M.set_moving(!1),
                    z.set_moving(!1)
                }
                ;
                let A = te();
                r.buttons.weather.wind = A,
                A.x = 512,
                A.y = 266,
                o.addChild(A),
                A.interactive = !0,
                A.on("pointerdown", function() {
                    e.set_variant("1"),
                    p.interaction.selection = "repellent",
                    synthesizer.play_effect("select")
                });
                let q = ne(0, 1, !1);
                q.x = 30;
                let N = ne(1, 1, !1);
                N.x = 40;
                let R = ne(2, 1, !1);
                R.x = 48,
                A.addChild(q),
                A.addChild(N),
                A.addChild(R),
                A.bad = q,
                A.med = N,
                A.good = R,
                A.onMouseOver = function() {
                    q.set_moving(!0),
                    N.set_moving(!0),
                    R.set_moving(!0)
                }
                ,
                A.onMouseOut = function() {
                    q.set_moving(!1),
                    N.set_moving(!1),
                    R.set_moving(!1)
                }
                ;
                let W = te();
                r.buttons.weather.sun = W,
                W.x = 320,
                W.y = 266,
                o.addChild(W),
                W.interactive = !0,
                W.on("pointerdown", function() {
                    e.set_variant("2"),
                    p.interaction.selection = "repellent",
                    synthesizer.play_effect("select")
                });
                let O = ne(0, 2, !1);
                O.x = 30;
                let G = ne(1, 2, !1);
                G.x = 40;
                let B = ne(2, 2, !1);
                B.x = 48,
                W.addChild(O),
                W.addChild(G),
                W.addChild(B),
                W.bad = O,
                W.med = G,
                W.good = B,
                W.onMouseOver = function() {
                    O.set_moving(!0),
                    G.set_moving(!0),
                    B.set_moving(!0)
                }
                ,
                W.onMouseOut = function() {
                    O.set_moving(!1),
                    G.set_moving(!1),
                    B.set_moving(!1)
                }
                ;
                const j = ["bad", "med", "good"]
                  , U = ["sun", "rain", "wind"];
                for (let e = 0; e < 3; e++) {
                    let t = [];
                    for (let n = 0; n < 3; n++) {
                        let a = new PIXI.Sprite(i["paper-hole-shadow-" + j[n] + ".png"]);
                        a.anchor.set(.5),
                        t[n] = a,
                        r.buttons.weather[U[e]].addChild(a)
                    }
                    r.buttons.weather[U[e]].shadows = t
                }
                let H = te();
                r.buttons.repellent.yes = H,
                H.y = 266,
                H.x = 608,
                o.addChild(H),
                H.interactive = !0,
                H.on("pointerdown", function() {
                    e.set_repellent(!0),
                    p.interaction.selection = "confirm",
                    synthesizer.play_effect("select")
                });
                let D = ae();
                H.addChild(D);
                let V = new PIXI.Sprite(i["no.png"]);
                V.anchor.set(.5),
                D.addChild(V);
                let Y = te();
                r.buttons.repellent.no = Y,
                Y.y = 266,
                Y.x = 416,
                o.addChild(Y),
                Y.interactive = !0,
                Y.on("pointerdown", function() {
                    e.set_repellent(!1),
                    p.interaction.selection = "confirm",
                    synthesizer.play_effect("select")
                });
                let K = ae();
                Y.addChild(K);
                let J = te();
                r.buttons.confirm = J,
                J.x = 512,
                J.y = 266,
                o.addChild(J),
                J.boats = [],
                J.shadows = [];
                const Q = [30, 40, 48];
                for (let e = 0; e < 3; e++) {
                    let t = new PIXI.Sprite(i["paper-hole-shadow-" + j[e] + ".png"]);
                    t.anchor.set(.5),
                    J.addChild(t),
                    J.shadows[e] = t,
                    J.boats[e] = [];
                    for (let t = 0; t < 3; t++) {
                        let n = ne(e, t, !1);
                        J.boats[e][t] = n,
                        n.x = Q[e],
                        J.addChild(n)
                    }
                }
                let Z = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 18,
                    fill: c.RED
                });
                u(Z);
                let $ = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 18,
                    fill: c.LIGHT_RED
                });
                u($);
                let ee = new PIXI.Text("Enter",Z);
                function te() {
                    let e = new PIXI.Container
                      , t = new PIXI.Sprite(i["paper-hole-0.png"]);
                    t.anchor.set(.5),
                    e.addChild(t);
                    let n = new PIXI.Sprite(i["paper-hole-0-hover.png"]);
                    return n.anchor.set(.5),
                    e.addChild(n),
                    n.visible = !1,
                    e.interactive = !0,
                    e.mouseover = function() {
                        n.visible = !0,
                        e.onMouseOver()
                    }
                    ,
                    e.mouseout = function() {
                        n.visible = !1,
                        e.onMouseOut()
                    }
                    ,
                    e.onMouseOver = function() {}
                    ,
                    e.onMouseOut = function() {}
                    ,
                    e
                }
                function ne(e, n, a) {
                    let i = ["bad", "med", "good"]
                      , r = "boat-" + i[e] + "-" + ["rain", "wind", "sun"][n]
                      , o = new PIXI.Container
                      , l = new PIXI.Sprite(t[r + "-stopped-0.png"]);
                    l.anchor.set(1, .5),
                    o.stationary = l,
                    o.addChild(l),
                    l.visible = !0;
                    let c = [PIXI.Texture.fromFrame(r + "-0.png"), PIXI.Texture.fromFrame(r + "-1.png")]
                      , d = new PIXI.extras.AnimatedSprite(c);
                    d.anchor.set(1, .5),
                    d.animationSpeed = .05,
                    d.play(),
                    d.visible = !1,
                    o.addChild(d),
                    o.moving = d,
                    o.set_moving = (e=>{
                        o.moving.visible = e,
                        o.stationary.visible = !e
                    }
                    );
                    let u = new PIXI.Sprite(s["repellent-" + i[e] + "-0.png"]);
                    return u.anchor.set(1, .5),
                    u.y = 12,
                    o.addChild(u),
                    u.visible = a,
                    o.repellent = u,
                    o
                }
                function ae() {
                    let e = [PIXI.Texture.fromFrame("squid-swim-0.png"), PIXI.Texture.fromFrame("squid-swim-1.png"), PIXI.Texture.fromFrame("squid-swim-2.png"), PIXI.Texture.fromFrame("squid-swim-3.png"), PIXI.Texture.fromFrame("squid-swim-4.png"), PIXI.Texture.fromFrame("squid-swim-5.png")]
                      , t = new PIXI.extras.AnimatedSprite(e);
                    return t.anchor.set(.5),
                    t.animationSpeed = .04,
                    t.play(),
                    t.rotation = Math.PI / 2,
                    t
                }
                m(ee),
                ee.anchor.set(.5),
                ee.mouseover = function() {
                    ee.style = $
                }
                ,
                ee.mouseout = function() {
                    ee.style = Z
                }
                ,
                r.enter = ee,
                r.enter.y = 80,
                J.addChild(ee),
                J.on("pointerdown", function() {
                    e.enter_next_race(),
                    synthesizer.play_effect("select")
                }),
                J.onMouseOver = function() {
                    ee.style = $
                }
                ,
                J.onMouseOut = function() {
                    ee.style = Z
                }
            }
            ,
            cleanup: ()=>{
                let t = PIXI.loader.resources["assets/controls.json"].textures
                  , i = p.screen.cleanup
                  , s = new PIXI.Container;
                i.container = s,
                n.stage.addChild(s);
                let r = new PIXI.Sprite(t["panel-cleanup.png"]);
                r.anchor.set(.5),
                s.addChild(r),
                i.panel = r,
                r.x = 512,
                r.y = 256;
                let o = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 18,
                    fill: c.BLACK
                });
                u(o);
                let l = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 14,
                    fill: c.BROWN
                });
                u(l);
                let d = new PIXI.Text("declare text",o);
                m(d),
                d.anchor.set(.5),
                s.addChild(d),
                i.label = d,
                d.x = 512,
                d.y = 244;
                let h = new PIXI.Text("Only the first person to do this will get the reward.",l);
                m(h),
                h.anchor.set(.5),
                s.addChild(h),
                i.description = h,
                h.x = 512,
                h.y = 276;
                let f = _("Confirm");
                s.addChild(f),
                i.confirm = f,
                f.x = 656,
                f.y = 384,
                f.on("pointerdown", function() {
                    "finished" == e.race.state ? e.declare_finish() : e.declare_void(),
                    synthesizer.play_effect("select")
                });
                let b = _("Cancel");
                function _(e) {
                    let n = new PIXI.TextStyle({
                        fontFamily: a,
                        fontSize: 14,
                        fill: c.GREEN
                    });
                    u(n);
                    let i = new PIXI.Container
                      , s = new PIXI.Sprite(t["button-main-normal.png"])
                      , r = new PIXI.Sprite(t["button-main-hover.png"]);
                    s.anchor.set(.5),
                    r.anchor.set(.5),
                    r.visible = !1;
                    let o = new PIXI.Text(e,n);
                    return m(o),
                    o.anchor.set(.5),
                    i.addChild(s),
                    i.addChild(r),
                    i.addChild(o),
                    i.interactive = !0,
                    i.mouseover = function() {
                        r.visible = !0
                    }
                    ,
                    i.mouseout = function() {
                        r.visible = !1
                    }
                    ,
                    i
                }
                s.addChild(b),
                i.cancel = b,
                b.x = 368,
                b.y = 384,
                b.on("pointerdown", function() {
                    p.interaction.state = "view",
                    synthesizer.play_effect("select")
                })
            }
            ,
            withdraw: ()=>{
                let t = PIXI.loader.resources["assets/controls.json"].textures
                  , i = p.screen.withdraw
                  , s = new PIXI.Container;
                i.container = s,
                n.stage.addChild(s);
                let r = new PIXI.Sprite(t["panel-withdraw.png"]);
                r.anchor.set(.5),
                s.addChild(r),
                i.panel = r,
                r.x = 512,
                r.y = 256;
                let o = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 18,
                    fill: c.BLACK
                });
                u(o);
                let l = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 14,
                    fill: c.BROWN
                });
                u(l);
                let d = new PIXI.Text("label text",o);
                m(d),
                d.anchor.set(.5),
                s.addChild(d),
                i.label = d,
                d.x = 512,
                d.y = 244;
                let h = new PIXI.Text("Withdraw your winnings and deposit them in your wallet.",l);
                m(h),
                h.anchor.set(.5),
                s.addChild(h),
                i.description = h,
                h.x = 512,
                h.y = 276;
                let f = _("Confirm");
                s.addChild(f),
                i.confirm = f,
                f.x = 656,
                f.y = 384,
                f.on("pointerdown", function() {
                    e.collect_winnings(),
                    synthesizer.play_effect("select")
                });
                let b = _("Cancel");
                function _(e) {
                    let n = new PIXI.TextStyle({
                        fontFamily: a,
                        fontSize: 14,
                        fill: c.GREEN
                    });
                    u(n);
                    let i = new PIXI.Container
                      , s = new PIXI.Sprite(t["button-main-normal.png"])
                      , r = new PIXI.Sprite(t["button-main-hover.png"]);
                    s.anchor.set(.5),
                    r.anchor.set(.5),
                    r.visible = !1;
                    let o = new PIXI.Text(e,n);
                    return m(o),
                    o.anchor.set(.5),
                    i.addChild(s),
                    i.addChild(r),
                    i.addChild(o),
                    i.interactive = !0,
                    i.mouseover = function() {
                        r.visible = !0
                    }
                    ,
                    i.mouseout = function() {
                        r.visible = !1
                    }
                    ,
                    i
                }
                s.addChild(b),
                i.cancel = b,
                b.x = 368,
                b.y = 384,
                b.on("pointerdown", function() {
                    p.interaction.state = "view",
                    synthesizer.play_effect("select")
                })
            }
            ,
            rename: ()=>{
                let t = PIXI.loader.resources["assets/controls.json"].textures
                  , i = p.screen.rename
                  , s = new PIXI.Container;
                i.container = s,
                n.stage.addChild(s);
                let r = new PIXI.Sprite(t["panel-rename.png"]);
                r.anchor.set(.5),
                s.addChild(r),
                i.panel = r,
                r.x = 512,
                r.y = 256;
                let o = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 20,
                    fill: c.BLACK
                });
                u(o);
                let l = new PIXI.Text("label text",o);
                m(l),
                l.anchor.set(.5),
                s.addChild(l),
                i.label = l,
                l.x = 512,
                l.y = 232;
                let d = new PIXI.TextStyle({
                    fontFamily: a,
                    fontSize: 26,
                    fill: c.GREEN
                });
                u(d);
                let h = new PIXI.Text("confirmation text",d);
                m(h),
                h.anchor.set(.5),
                s.addChild(h),
                i.confirmation = h,
                h.x = 512,
                h.y = 280;
                let f = g("Change");
                s.addChild(f),
                i.change = f,
                f.x = 656,
                f.y = 384,
                f.on("pointerdown", function() {
                    "input" == p.interaction.rename ? p.interaction.rename = "confirm" : p.interaction.rename = "input",
                    synthesizer.play_effect("select")
                });
                let b = g("Confirm");
                s.addChild(b),
                i.confirm = b,
                b.x = 656,
                b.y = 384,
                b.on("pointerdown", function() {
                    p.interaction.name = p.screen.rename.confirmation.text,
                    e.rename_boat(p.screen.rename.confirmation.text),
                    synthesizer.play_effect("select")
                });
                let _ = g("Cancel");
                function g(e) {
                    let n = new PIXI.TextStyle({
                        fontFamily: a,
                        fontSize: 14,
                        fill: c.GREEN
                    });
                    u(n);
                    let i = new PIXI.Container
                      , s = new PIXI.Sprite(t["button-main-normal.png"])
                      , r = new PIXI.Sprite(t["button-main-hover.png"]);
                    s.anchor.set(.5),
                    r.anchor.set(.5),
                    r.visible = !1;
                    let o = new PIXI.Text(e,n);
                    return m(o),
                    o.anchor.set(.5),
                    i.addChild(s),
                    i.addChild(r),
                    i.addChild(o),
                    i.interactive = !0,
                    i.mouseover = function() {
                        r.visible = !0
                    }
                    ,
                    i.mouseout = function() {
                        r.visible = !1
                    }
                    ,
                    i
                }
                s.addChild(_),
                i.cancel = _,
                _.x = 368,
                _.y = 384,
                _.on("pointerdown", function() {
                    p.interaction.state = "view",
                    synthesizer.play_effect("select")
                });
                let I = {
                    fontFamily: a,
                    fontSize: "18pt",
                    padding: "14px",
                    width: "512px",
                    color: "#26272E"
                }
                  , w = new PIXI.TextInput(I,{
                    fill: 15264243,
                    margin: 0,
                    padding: 0
                });
                s.addChild(w),
                i.input = w,
                w.x = 240,
                w.y = 256
            }
        },
        update: {
            loading: t=>{
                switch (e.state) {
                case "network":
                    return p.screen.loading.label.text = "Please switch to the Ethereum mainnet.",
                    void (t >= 100 && (p.screen.loading.label.y = 480));
                case "error":
                    return t >= 100 && (p.screen.loading.label.y = 480),
                    void (p.screen.loading.label.text = "An error has occurred. Maybe refresh or something?")
                }
                t < 100 ? p.screen.loading.label.text = "Loading... (" + Math.round(100 * t) / 100 + "%)" : (p.screen.loading.label.y = 480,
                p.screen.loading.label.text = "Game best enjoyed with sound on")
            }
            ,
            loop: t=>{
                p.time = Math.round(t);
                let n = p.screen;
                n.navBar.container.visible = n.race.container.visible = "view" === e.state,
                n.title.container.visible = "view" !== e.state,
                p.update.squid(),
                p.update.nav(),
                p.update.boats(),
                p.update.race(),
                p.update.weather(),
                p.update.selection(),
                p.update.controls(),
                p.update.withdraw(),
                p.update.cleanup(),
                p.update.rename(),
                p.update.title(),
                requestAnimationFrame(p.update.loop)
            }
            ,
            weather: ()=>{
                let t = p.screen.seascape;
                if ("running" != e.race.state && !p.race.motion.moving)
                    return t.whiteCaps.visible = !1,
                    t.waves.visible = !0,
                    t.rain_back.visible = t.rain_front.visible = !1,
                    void (n.renderer.backgroundColor = 29677);
                let a = t.rain_back.visible;
                switch (t.rain_back.visible = t.rain_front.visible = "0" == e.race.weather,
                t.whiteCaps.visible = "1" == e.race.weather,
                t.waves.visible = "1" != e.race.weather,
                !a && t.rain_back.visible && synthesizer.play_effect("rain"),
                e.race.weather) {
                case "0":
                    Math.floor(1e6 * Math.random()) % 200 == 0 ? (p.app.renderer.backgroundColor = 11199484,
                    synthesizer.play_effect("thunder")) : p.app.renderer.backgroundColor = 2045933;
                    break;
                case "1":
                case "2":
                    n.renderer.backgroundColor = 29677
                }
            }
            ,
            nav: ()=>{
                let n = p.screen.navBar;
                if ("view" == e.state)
                    switch (e.me.address) {
                    case "0x0":
                    case "0x0000000000000000000000000000000000000000":
                        n.address.text = "No wallet detected",
                        n.name.text = "";
                        break;
                    default:
                        let a = e.me.address.substr(0, 8) + "...";
                        if (n.address.text = a,
                        e.me.name.trim() ? n.name.text = e.me.name : n.name.text = t.generate(e.me.address),
                        e.me.funds > 0) {
                            n.funds.visible = !0;
                            let t = web3.utils.fromWei(e.me.funds, "ether");
                            t = Math.round(1e7 * t) / 1e7,
                            n.funds.text = "Bank: " + t + " Ether"
                        } else
                            n.funds.visible = !1
                    }
            }
            ,
            squid: ()=>{
                let t = p.squid
                  , n = p.screen.seascape.squid;
                switch (e.race.state) {
                case "void":
                case "finished":
                case "declared":
                case "running":
                    if (t.range = 128,
                    "-1" != e.race.squid && "11" != e.race.squid && p.race.boats[e.race.squid])
                        "swim" != t.state || Math.round(p.calculate_x(p.race.positions.current[e.race.squid]) / 3) != Math.round(p.calculate_x(e.race.positions[e.race.squid]) / 3) && e.race.now == e.race.block_squid || (t.state = "attack",
                        "running" == p.race.state_last && synthesizer.play_effect("squid"),
                        p.race.boats[e.race.squid].obj.die());
                    else {
                        let e = 512;
                        for (let t = 0; t < p.race.boats.length; t++)
                            p.race.boats[t] && p.race.boats[t].obj && (e = Math.max(e, p.race.boats[t].obj.x));
                        t.x = e
                    }
                    break;
                case "loading":
                case "waiting":
                case "starting":
                case "starting_now":
                    t.state = "swim",
                    "view" != e.state ? t.x = 896 : t.x = 512,
                    t.y = 256,
                    t.range = 128
                }
                n.x = t.x,
                n.visible = "swim" == t.state,
                n.rotation = Math.PI / 2 + t.dir * Math.PI / 2,
                n.swim.visible && (t.pos += t.speed * t.dir,
                Math.abs(t.pos) >= Math.abs(t.range) && (t.pos = t.dir * (t.range - 1),
                n.swim.visible = !1,
                n.turn_in.visible = !0,
                n.turn_in.gotoAndPlay(0))),
                n.y = Math.round(2 * (t.y + t.pos)) / 2
            }
            ,
            boats: ()=>{
                switch (p.check_boats(),
                p.race.state_last) {
                case "loading":
                    switch (e.race.state) {
                    case "loading":
                    case "waiting":
                    case "starting":
                    case "starting_now":
                        p.set_position();
                        break;
                    case "running":
                        p.set_motion_fromLoad();
                        break;
                    case "void":
                    case "finished":
                    case "declared":
                    case "declared_void":
                        p.set_position()
                    }
                    break;
                case "waiting":
                case "starting":
                case "starting_now":
                    "running" !== e.race.state ? p.set_position_initial() : p.set_motion(1);
                    break;
                case "running":
                    p.race.block_last !== e.race.now && ("finished" == e.race.state ? p.set_motion(1) : p.set_motion(e.race.now - p.race.block_last)),
                    p.update_motion();
                    break;
                case "finished":
                    p.ensure_finish(),
                    p.update_motion();
                    break;
                case "void":
                case "declared_void":
                case "declared":
                    p.set_position()
                }
                for (let t = 0; t < p.race.boats.length; t++) {
                    let n = p.race.boats[t];
                    n.obj.alive && (n.obj.wake.visible = n.obj.moving.visible = p.race.motion.moving || "running" == e.race.state,
                    n.obj.stationary.visible = !n.obj.moving.visible)
                }
            }
            ,
            race: ()=>{
                if (p.screen.race.boat_container.visible = "loading" != e.race.state && "void" != e.race.state && "declared_void" != e.race.state,
                "starting_now" == p.race.state_last && "running" == e.race.state && (p.set_start(),
                synthesizer.set_music("race"),
                "selection" == p.interaction.state && (p.interaction.state = "view")),
                p.screen.race.text_pool.text = "Prize pool: " + web3.utils.fromWei(String(.95 * e.race.pool), "ether") + " ETH",
                p.screen.race.text_pool.visble = "running" != e.race.state && "loading" != e.race.state && !p.race.motion.moving,
                p.race.motion.moving)
                    p.screen.race.text_status.text = "",
                    synthesizer.set_music("race");
                else
                    switch (e.race.state) {
                    case "loading":
                        p.screen.race.text_status.text = "Loading...";
                        break;
                    case "waiting":
                        p.screen.race.text_status.text = "Waiting for contenders...";
                    case "starting":
                        if ("starting" === e.race.state) {
                            let t = e.race.start - e.race.now
                              , n = 20 * t;
                            p.screen.race.text_status.text = "Starting in " + t + " blocks (~" + n + " seconds)..."
                        }
                        synthesizer.set_music("menu");
                        break;
                    case "starting_now":
                        p.screen.race.text_status.text = "Race about to begin, please take your seats!",
                        synthesizer.set_music("wait");
                        break;
                    case "running":
                        p.screen.race.text_status.text = "",
                        synthesizer.set_music("race");
                        break;
                    case "finished":
                        p.screen.race.text_status.text = "";
                        break;
                    case "void":
                        p.screen.race.text_status.text = "Previous race result unavailable";
                        break;
                    case "declared":
                        p.screen.race.text_status.text = "Race declared";
                        break;
                    case "declared_void":
                        p.screen.race.text_status.text = "Previous race result unavailable"
                    }
                p.race.block_last = e.race.now,
                p.race.state_last = e.race.state,
                p.position_boats(),
                p.update_start(),
                p.update_results()
            }
            ,
            title: ()=>{
                switch (e.state) {
                case "welcome":
                    p.screen.title.message.text = "Click to begin!";
                    break;
                case "loading":
                    p.screen.title.message.text = "...";
                    break;
                case "network":
                    p.screen.title.message.text = "Please switch to the Ethereum mainnet.";
                    break;
                case "error":
                    p.screen.title.message.text = "An error has occurred. Maybe refresh or something?"
                }
            }
            ,
            selection: ()=>{
                let n = p.screen.selection
                  , a = n.container;
                if (a.visible = "selection" == p.interaction.state,
                a.visible) {
                    const a = "class" == p.interaction.selection
                      , c = "variant" == p.interaction.selection
                      , u = "repellent" == p.interaction.selection
                      , m = "confirm" == p.interaction.selection;
                    for (let e = 0; e < 3; e++)
                        n.labels.names[e].visible = n.labels.descriptions[e].visible = a || c,
                        n.labels.prices[e].visible = a;
                    n.buttons.back.visible = !a,
                    n.buttons.confirm.visible = m,
                    n.enter.visible = m,
                    n.buttons.boat.good.visible = n.buttons.boat.med.visible = n.buttons.boat.bad.visible = a,
                    n.buttons.weather.rain.visible = n.buttons.weather.wind.visible = n.buttons.weather.sun.visible = c,
                    n.buttons.repellent.yes.visible = n.buttons.repellent.no.visible = u;
                    for (let t in n.buttons.weather)
                        n.buttons.weather[t].bad.visible = 0 == e.selection.class_num,
                        n.buttons.weather[t].med.visible = 1 == e.selection.class_num,
                        n.buttons.weather[t].good.visible = 2 == e.selection.class_num;
                    switch (n.labels.names[0].x = n.labels.prices[0].x = n.labels.descriptions[0].x = n.buttons.boat.bad.x,
                    p.interaction.selection) {
                    case "class":
                        n.labels.instruction.text = "Select your boat",
                        n.labels.names[0].text = "Cutter",
                        n.labels.names[1].text = "Schooner",
                        n.labels.names[2].text = "Galleon",
                        n.labels.descriptions[0].text = "A quick little boat",
                        n.labels.descriptions[1].text = "15% faster",
                        n.labels.descriptions[2].text = "30% faster",
                        n.labels.prices[0].text = "0.005 ETH",
                        n.labels.prices[1].text = "0.015 ETH",
                        n.labels.prices[2].text = "0.030 ETH";
                        break;
                    case "variant":
                        const a = ["sun", "rain", "wind"];
                        for (let t = 0; t < 3; t++)
                            for (let i = 0; i < 3; i++)
                                n.buttons.weather[a[t]].shadows[i].visible = i == e.selection.class_num;
                        n.labels.instruction.text = "Customise it",
                        n.labels.names[0].text = "Clear Decks",
                        n.labels.names[1].text = "Spinnaker",
                        n.labels.names[2].text = "Covered Quarterdeck ",
                        n.labels.descriptions[0].text = "For clear weather",
                        n.labels.descriptions[1].text = "For high winds",
                        n.labels.descriptions[2].text = "For when it rains";
                        break;
                    case "repellent":
                        n.labels.instruction.text = "Feeling lucky?",
                        n.labels.names[0].visible = n.labels.prices[0].visible = n.labels.descriptions[0].visible = !0,
                        n.labels.names[0].x = 512,
                        n.labels.prices[0].x = n.labels.descriptions[0].x = n.buttons.repellent.yes.x;
                        const c = function(e) {
                            const t = s[e] * i / 100;
                            return web3.utils.fromWei(String(t), "ether")
                        }(e.selection.class_num);
                        n.labels.names[0].text = "Squid repellent",
                        n.labels.prices[0].text = "+" + c + " ETH (+10%)",
                        n.labels.descriptions[0].text = "Prevents squid attacks";
                        break;
                    case "confirm":
                        n.labels.instruction.text = "Get that boat in the water!";
                        for (let t = 0; t < 3; t++) {
                            n.buttons.confirm.shadows[t].visible = t == e.selection.class_num;
                            for (let a = 0; a < 3; a++)
                                n.buttons.confirm.boats[t][a].visible = t == e.selection.class_num && a == e.selection.variant,
                                n.buttons.confirm.boats[t][a].repellent.visible = e.selection.repellent
                        }
                        n.labels.names[0].visible = n.labels.descriptions[0].visible = !0,
                        n.labels.names[0].x = n.labels.descriptions[0].x = 512;
                        let u = e.me.name;
                        u || (u = t.generate(e.me.address));
                        const m = d(e.selection.class_num, e.selection.repellent);
                        n.labels.names[0].text = u,
                        n.labels.descriptions[0].text = "A " + r[e.selection.class_num] + " with " + o[e.selection.variant] + l[Number(!e.selection.repellent)] + ".",
                        n.enter.text = "ENTER RACE (" + m + " ETH)"
                    }
                }
            }
            ,
            controls: ()=>{
                let t = p.screen.controls
                  , n = p.screen.controls.container
                  , a = e.get_result()
                  , i = 0;
                for (let e = 0; e < p.race.positions.current.length; e++)
                    i = Math.max(i, p.race.positions.current[e]);
                if (n.visible = !p.race.motion.moving && "view" == p.interaction.state && "view" == e.state && "running" !== e.race.state && (0 == i || 50 == i) && e.check_loggedIn(),
                !n.visible)
                    return;
                let s = e.check_transacting();
                t.loading.visible = s;
                let r = "finished" == e.race.state || "declared" == e.race.state
                  , o = "finished" == e.race.state
                  , l = "void" == e.race.state
                  , c = "waiting" == e.race.state || "starting" == e.race.state
                  , d = "declared_void" == e.race.state
                  , u = a.mine > 0 && ("finished" == e.race.state || "declared" == e.race.state && e.me.funds > 0);
                t.button_collect.visible = u && !s,
                t.button_enter.visible = (l || r || d || c && !e.check_inRace()) && !s,
                t.button_cleanup.visible = (l || o) && !s,
                t.button_reenter.visible = c && e.check_inRace() && !s,
                l || d ? t.button_enter.x = 512 : r ? t.button_enter.x = 256 : c && (t.button_enter.x = 512)
            }
            ,
            withdraw: ()=>{
                let t = p.screen.withdraw
                  , n = p.screen.withdraw.container;
                if (n.visible = "withdraw" == p.interaction.state && "view" == e.state,
                !n.visible)
                    return;
                let a = e.get_result().withdrawable
                  , i = web3.utils.fromWei(a, "ether");
                t.label.text = "Withdraw " + i + " ETH?"
            }
            ,
            cleanup: ()=>{
                let t = p.screen.cleanup
                  , n = p.screen.cleanup.container;
                if ("cleanup" == p.interaction.state && "finished" != e.race.state && "void" != e.race.state && (p.interaction.state = "view"),
                n.visible = "cleanup" == p.interaction.state && "view" == e.state,
                !n.visible)
                    return;
                let a = web3.utils.fromWei(e.get_result().cleanup, "ether");
                "finished" == e.race.state ? t.label.text = "Declare race as finished and claim " + a + " ETH." : t.label.text = "Declare race as void and claim " + a + " ETH."
            }
            ,
            rename: ()=>{
                let n = p.screen.rename
                  , a = p.screen.rename.container;
                if (a.visible = "rename" == p.interaction.state && "view" == e.state,
                !a.visible)
                    return;
                n.input.placeholder = t.generate(e.me.address);
                const i = "input" == p.interaction.rename
                  , s = "confirm" == p.interaction.rename;
                n.input.visible = n.cancel.visible = i,
                n.confirmation.visible = n.confirm.visible = s,
                i ? (n.label.text = "Rename your boats",
                n.change.x = n.confirm.x) : (n.label.text = "You're about to rename your boats as",
                n.change.x = n.cancel.x),
                n.confirmation.text = ValidateName(n.input.text)
            }
        }
    };
    function h(e, t, n) {
        PIXI.loader.resources["assets/boats.json"].textures;
        let i = ["bad", "med", "good"]
          , s = "boat-" + i[e] + "-" + ["rain", "wind", "sun"][t]
          , r = new PIXI.Container
          , o = [PIXI.Texture.fromFrame(s + "-stopped-0.png"), PIXI.Texture.fromFrame(s + "-stopped-1.png")]
          , l = new PIXI.extras.AnimatedSprite(o);
        l.animationSpeed = .02,
        l.play(),
        l.anchor.set(1, .5),
        r.addChild(l),
        r.stationary = l,
        l.visible = !1;
        let d = [PIXI.Texture.fromFrame(s + "-0.png"), PIXI.Texture.fromFrame(s + "-1.png")]
          , p = new PIXI.extras.AnimatedSprite(d);
        p.anchor.set(1, .5),
        p.animationSpeed = .01,
        p.play(),
        r.addChild(p),
        r.moving = p;
        let h = [PIXI.Texture.fromFrame("wake-good-0.png"), PIXI.Texture.fromFrame("wake-good-1.png"), PIXI.Texture.fromFrame("wake-good-2.png")]
          , f = new PIXI.extras.AnimatedSprite(h);
        f.anchor.set(1, .5),
        f.y = 24,
        f.animationSpeed = .045,
        f.gotoAndPlay(Math.floor(2.999 * Math.random())),
        0 == e ? f.x = -4 : 1 == e && (f.x = -8),
        r.wake = f;
        let b = [PIXI.Texture.fromFrame("shadow-attack-0.png"), PIXI.Texture.fromFrame("shadow-attack-1.png"), PIXI.Texture.fromFrame("shadow-attack-2.png")]
          , _ = new PIXI.extras.AnimatedSprite(b);
        _.anchor.set(.5, -.25),
        _.animationSpeed = .03,
        _.play(),
        _.visible = !1,
        r.addChild(_),
        r.shadow_tentacles = _;
        let g = [];
        for (let e = 0; e <= 16; e++)
            g.push(PIXI.Texture.fromFrame("tentacles-" + e + ".png"));
        let I = new PIXI.extras.AnimatedSprite(g);
        I.anchor.set(.5),
        I.animationSpeed = .08,
        I.visible = !1,
        I.stop(),
        r.addChild(I),
        r.tentacles = I,
        _.x = I.x = -20 - 7 * e;
        let w = [];
        switch (e) {
        case "0":
            w = [PIXI.Texture.fromFrame("boat-bad-sink-0.png"), PIXI.Texture.fromFrame("boat-bad-sink-1.png"), PIXI.Texture.fromFrame("boat-bad-sink-2.png"), PIXI.Texture.fromFrame("boat-bad-sink-3.png")];
            break;
        case "1":
            w = [PIXI.Texture.fromFrame("boat-med-sink-0.png"), PIXI.Texture.fromFrame("boat-med-sink-1.png"), PIXI.Texture.fromFrame("boat-med-sink-2.png"), PIXI.Texture.fromFrame("boat-med-sink-3.png"), PIXI.Texture.fromFrame("boat-med-sink-4.png"), PIXI.Texture.fromFrame("boat-med-sink-5.png")];
            break;
        case "2":
            w = [PIXI.Texture.fromFrame("boat-good-sink-0.png"), PIXI.Texture.fromFrame("boat-good-sink-1.png"), PIXI.Texture.fromFrame("boat-good-sink-2.png"), PIXI.Texture.fromFrame("boat-good-sink-3.png"), PIXI.Texture.fromFrame("boat-good-sink-4.png")]
        }
        let y = new PIXI.extras.AnimatedSprite(w);
        y.anchor.set(1, .5),
        y.animationSpeed = .04,
        y.loop = !1,
        r.addChild(y),
        r.sinking = y,
        r.alive = !0,
        r.die = function() {
            r.alive = !1,
            r.wake.visible = r.moving.visible = r.stationary.visible = !1,
            r.sinking.visible = !0,
            r.sinking.gotoAndPlay(0),
            r.tentacles.visible = r.shadow_tentacles.visible = !0,
            r.tentacles.gotoAndPlay(0)
        }
        ,
        y.visible = !1,
        r.revive = function() {
            r.alive = !0,
            r.wake.visible = r.moving.visible = r.stationary.visible = !0,
            r.sinking.visible = !1,
            r.sinking.stop(),
            r.tentacles.visible = r.shadow_tentacles.visible = !1,
            r.tentacles.stop()
        }
        ;
        let v = [PIXI.Texture.fromFrame("shadow-" + i[e] + "-0.png"), PIXI.Texture.fromFrame("shadow-" + i[e] + "-1.png"), PIXI.Texture.fromFrame("shadow-" + i[e] + "-2.png")]
          , x = new PIXI.extras.AnimatedSprite(v);
        x.anchor.set(1, .5),
        x.animationSpeed = .025,
        x.play(),
        r.addChild(x),
        x.y = 48;
        let P = [PIXI.Texture.fromFrame("repellent-" + i[e] + "-0.png"), PIXI.Texture.fromFrame("repellent-" + i[e] + "-1.png"), PIXI.Texture.fromFrame("repellent-" + i[e] + "-2.png")]
          , k = new PIXI.extras.AnimatedSprite(P);
        k.anchor.set(1, .5),
        k.animationSpeed = .01,
        k.play(),
        r.addChild(k),
        r.repellent_trail = k,
        k.y = 12,
        k.visible = n,
        r.addChild(f);
        let X = new PIXI.TextStyle({
            fontFamily: a,
            fontSize: 14,
            fill: c.WHITE
        });
        u(X);
        let S = new PIXI.TextStyle({
            fontFamily: a,
            fontSize: 14,
            fill: c.LIGHT_YELLOW
        });
        u(S);
        let C = new PIXI.Text("Boat name",S);
        return m(C),
        r.addChild(C),
        r.label = C,
        r.style_label = S,
        r.style_label_me = X,
        C.y = 10,
        r
    }
    function f(e) {
        let t = PIXI.loader.resources["assets/selection.json"].textures
          , n = new PIXI.Container
          , a = new PIXI.Sprite(t["button-" + e + "-normal.png"]);
        a.anchor.set(.5),
        n.normal = a,
        n.addChild(a);
        let i = new PIXI.Sprite(t["button-" + e + "-hover.png"]);
        return i.anchor.set(.5),
        n.hover = i,
        i.visible = !1,
        n.addChild(i),
        n.interactive = !0,
        n.mouseover = function() {
            i.visible = !0,
            a.visible = !1
        }
        ,
        n.mouseout = function() {
            i.visible = !1,
            a.visible = !0
        }
        ,
        n
    }
    return p.init.init(),
    p
}
function Game(e) {
    window.ethereum && window.ethereum.on && window.ethereum.on("accountsChanged", async n=>{
        await e.get_account(),
        await t.get_me()
    }
    );
    const t = {
        contract: e,
        state: "state",
        reading_boats: !1,
        boats: {},
        me: {
            address: "0x0",
            name: "",
            funds: 0
        },
        selection: {
            class_num: -1,
            variant: -1,
            repellent: !1
        },
        race: {
            synchronise: {
                start: !1,
                finish: !1
            },
            race_number: -1,
            pool: 0,
            state: "loading",
            boat_count: 0,
            boats: [],
            positions: [],
            history: {
                block: 0,
                hashes: []
            },
            start: 0,
            finish: 0,
            now: 0,
            weather: 0,
            squid: "-1",
            block_squid: 0
        },
        init: ()=>{
            switch (e.status) {
            case "loading":
                e.init(),
                setTimeout(t.init, 100);
                break;
            case "network":
                t.prompt_network(),
                setTimeout(t.init, 100);
                break;
            case "ready":
                t.state = "welcome",
                t.get_me();
                break;
            case "error":
                t.prompt_error(),
                setTimeout(t.init, 100)
            }
        }
        ,
        get_me: async()=>{
            if (t.me.address = e.me().toLowerCase(),
            Number(t.me.address)) {
                const n = await e.get_name(t.me.address);
                t.me.name = n.trim(),
                t.me.funds = await e.get_balance(),
                t.boats[t.me.address] = t.me.name
            } else
                t.me.name = "",
                t.me.funds = 0
        }
        ,
        expect_name: async(e,n)=>{
            await t.get_me(),
            t.me.name != e && n < 200 && setTimeout(function() {
                t.expect_name(e, n + 1)
            }, 200)
        }
        ,
        expect_withdraw: async e=>{
            await t.get_me(),
            0 != t.me.funds && e < 200 && setTimeout(function() {
                t.expect_withdraw(e + 1)
            }, 200)
        }
        ,
        check_loggedIn: ()=>"0x0" != t.me.address,
        check_inRace: ()=>{
            let e = t.race.boats;
            for (let n in e)
                if (e[n].owner.toLowerCase() === t.me.address.toLowerCase())
                    return !0;
            return !1
        }
        ,
        check_declaring: ()=>e.transactions.declare_race.interval > 0,
        check_entering: ()=>e.transactions.enter_race.interval > 0,
        check_finishing: ()=>e.transactions.declare_finish.interval > 0,
        check_renaming: ()=>e.transactions.rename_boat.interval > 0,
        check_entering_next: ()=>e.transactions.enter_next_race.interval > 0,
        check_collecting_winnings: ()=>e.transactions.collect_winnings.interval > 0,
        check_transacting: ()=>{
            for (let t in e.transactions)
                if (e.transactions[t].interval > 0)
                    return !0;
            return !1
        }
        ,
        get_result: ()=>{
            let e = 0
              , n = 0;
            for (let a = 0; a < t.race.boat_count; a++)
                t.race.positions[a] >= 50 && (e++,
                t.race.boats[a] && (n += t.race.boats[a].owner.toLowerCase() == t.me.address.toLowerCase()));
            let a, i = web3.utils.BN, s = new i(t.race.pool), r = new i(e), o = new i(95), l = new i(100), c = new i(1), d = (new i(4),
            new i(25),
            new i(1e3),
            (a = e > 0 ? s.mul(o).div(r).div(l) : new i(0)).mul(new i(n))), u = new i(t.me.funds), m = s.mul(c).div(l), p = m.add(d).add(u);
            return {
                withdrawable: u.add(d).toString(),
                cleanup: m.toString(),
                winners: e,
                mine: n,
                reward: d.toString(),
                bookKeeping: p.toString()
            }
        }
        ,
        clear_sync: ()=>{
            t.race.synchronise.start = !1,
            t.race.synchronise.finish = !1
        }
        ,
        check_sync: ()=>t.race.synchronise.start && t.race.synchronise.finish,
        refresh_race: async()=>{
            if (t.race.synchronise.start = !0,
            "view" !== t.state)
                return;
            const n = t.race;
            let a = "loading" === n.state || "waiting" === n.state || "starting" === n.state
              , i = await e.get_times()
              , s = await e.get_progress();
            if (t.read_history(s)) {
                if (-1 == n.race_number && (n.race_number = await e.get_race_number()),
                "0" == n.race_number ? n.state = "declared" : n.state = t.read_race_state(i, s),
                n.start == i.block_start && 0 != n.start || (a = !0),
                n.positions = s.progress,
                n.start = i.block_start,
                n.finish = s.block_finish,
                n.now = i.block_current,
                n.weather = s.weather,
                "11" != s.squid ? (n.squid = s.squid,
                n.block_squid = s.block_squid) : (n.squid = "11",
                n.block_squid = "0"),
                a) {
                    let a = await e.get_boats()
                      , i = 0;
                    for (let e = 0; e < a.owner.length; e++) {
                        if ("0x0000000000000000000000000000000000000000" == a.owner[e])
                            break;
                        i++
                    }
                    t.race.boats.length != i && (t.race.boats = []);
                    for (let n = 0; n < i; n++) {
                        let i = a.owner[n].toLowerCase()
                          , s = {
                            owner: i,
                            class_num: a.class[n],
                            variant: a.variant[n],
                            repellent: a.repellent[n]
                        };
                        t.race.boats[n] = s,
                        void 0 === t.boats[i] && (t.boats[i] = null),
                        t.race.pool = await e.get_pool()
                    }
                    n.boat_count = i,
                    t.reading_boats = !0,
                    t.name_boats()
                }
                t.race.synchronise.finish = !0,
                setTimeout(t.refresh_race, 900)
            }
        }
        ,
        attend_race: async()=>{
            t.state = "view";
            const e = t.race;
            e.race_number = -1,
            e.pool = 0,
            e.boat_count = 0,
            e.state = "loading",
            e.positions = [],
            e.boats = [],
            e.history = {
                block: 0,
                hashes: []
            },
            e.start = 0,
            e.finish = 0,
            e.now = 0,
            e.weather = 0,
            e.squid = "-1",
            t.refresh_race()
        }
        ,
        prompt_network: ()=>{
            t.state = "network"
        }
        ,
        prompt_error: ()=>{
            t.state = "error"
        }
        ,
        name_boats: async()=>{
            if (t.reading_boats) {
                for (let n in t.boats)
                    if (!t.boats[n]) {
                        let a = await e.get_name(n);
                        t.boats[n] = a.trim(),
                        await t.name_boats();
                        break
                    }
                t.reading_boats = !1
            }
        }
        ,
        update_balance: async()=>{
            const n = await e.get_balance();
            t.me.funds = n
        }
        ,
        update_me: async()=>{
            t.me.address = e.me().toLowerCase(),
            t.update_balance(),
            t.me.name = await e.get_name(t.me.address)
        }
        ,
        read_race_state: (e,n)=>{
            e.block_start = Number(e.block_start),
            e.block_finish = Number(e.block_finish),
            e.block_current = Number(e.block_current);
            let a = t.parse_progress(n.progress);
            return 0 == e.block_start ? "waiting" : e.block_start > 0 && e.block_finish == e.block_start ? "declared_void" : e.block_start > 0 && e.block_start + 255 < e.block_current ? "void" : e.block_start > e.block_current ? "starting" : e.block_start == e.block_current ? "starting_now" : "0" != e.block_finish ? "declared" : 0 === a.length ? "running" : "finished"
        }
        ,
        read_history: e=>{
            let n = t.race.history;
            if (0 == n.block) {
                n.block = e.block_now;
                for (let t = 0; t < 10; t++)
                    n.hashes[String(t + n.block - 10)] = e.history[t];
                return !0
            }
            {
                n.block = e.block_now;
                let t = {};
                for (let a = 0; a < 10; a++) {
                    let i = e.history[a]
                      , s = String(a + n.block - 10)
                      , r = n.hashes[s];
                    if (r && r !== i)
                        return n.hashes = [],
                        n.block = 0,
                        !1;
                    t[s] = i
                }
                return n.hashes = t,
                !0
            }
        }
        ,
        parse_progress: e=>{
            let t = [];
            for (let n = 0; n < e.length; n++)
                e[n] >= 50 && t.push(n);
            return t
        }
        ,
        open_selection: function() {
            t.selection.class_num = -1,
            t.selection.variant = -1,
            t.selection.repellent = !1
        },
        set_class: function(e) {
            t.selection.class_num = e
        },
        set_variant: function(e) {
            t.selection.variant = e
        },
        set_repellent: function(e) {
            t.selection.repellent = e
        },
        declare_race: ()=>{
            e.declare_race(t.selection.class_num, t.selection.variant, t.selection.repellent)
        }
        ,
        enter_race: ()=>{
            "declared" !== t.race.state && "declared_void" !== t.race.state ? e.enter_race(t.selection.class_num, t.selection.variant, t.selection.repellent) : t.declare_race()
        }
        ,
        declare_void: ()=>{
            e.declare_void()
        }
        ,
        declare_finish: ()=>{
            e.declare_finish(t.race.finish)
        }
        ,
        verify_name: e=>e !== DecodeName(EncodeName(e)) ? {
            okay: !1,
            err: "chars"
        } : e.length > 32 ? {
            okay: !1,
            err: "length"
        } : {
            okay: !0
        },
        rename_boat: t=>{
            e.rename_boat(t)
        }
        ,
        grab_gold: ()=>{
            e.grab_gold()
        }
        ,
        enter_next_race: ()=>{
            e.enter_next_race(t.race.finish, t.selection.class_num, t.selection.variant, t.selection.repellent)
        }
        ,
        collect_winnings: ()=>{
            e.collect_winnings(t.race.finish)
        }
    };
    return t.init(),
    t
}
const Contract = ()=>{
    const e = "0x9cd2c3f0b876a41c5590953c7cc855a7d6d4bc18";
    let t = Instance(e);
    const n = 10
      , a = [web3.utils.toWei("5", "finney"), web3.utils.toWei("15", "finney"), web3.utils.toWei("30", "finney")];
    function i(e, t) {
        return a[e] * (100 + t * n) / 100
    }
    let s, r = "0x0", o = {
        status: "loading",
        transactions: {
            declare_race: {
                hash: "",
                interval: null,
                submit: ()=>{}
                ,
                trigger: ()=>{}
            },
            enter_race: {
                hash: "",
                interval: null,
                submit: ()=>{}
                ,
                trigger: ()=>{}
            },
            declare_void: {
                hash: "",
                interval: null,
                submit: ()=>{}
                ,
                trigger: ()=>{}
            },
            declare_finish: {
                hash: "",
                interval: null,
                submit: ()=>{}
                ,
                trigger: ()=>{}
            },
            rename_boat: {
                hash: "",
                interval: null,
                submit: ()=>{}
                ,
                trigger: ()=>{}
            },
            grab_gold: {
                hash: "",
                interval: null,
                submit: ()=>{}
                ,
                trigger: ()=>{}
            },
            enter_next_race: {
                hash: "",
                interval: null,
                submit: ()=>{}
                ,
                trigger: ()=>{}
            },
            collect_winnings: {
                hash: "",
                interval: null,
                submit: ()=>{}
                ,
                trigger: ()=>{}
            }
        },
        check_metamask: ()=>"0x0" !== r,
        check_network: ()=>"1" === String(s),
        me: ()=>r || "0x0",
        declare_race: async(n,a,s)=>{
            let o = t.methods.declare_race(n, a, s);
            web3.eth.sendTransaction({
                from: r,
                to: e,
                value: i(n, s),
                data: o.encodeABI()
            }, (e,t)=>{
                t && l("declare_race", t)
            }
            )
        }
        ,
        enter_race: async(n,a,s)=>{
            let o = t.methods.enter_race(n, a, s);
            web3.eth.sendTransaction({
                from: r,
                to: e,
                value: i(n, s),
                data: o.encodeABI()
            }, (e,t)=>{
                t && l("enter_race", t)
            }
            )
        }
        ,
        declare_void: async()=>{
            let n = t.methods.declare_void();
            web3.eth.sendTransaction({
                from: r,
                to: e,
                data: n.encodeABI()
            }, (e,t)=>{
                t && l("declare_void", t)
            }
            )
        }
        ,
        declare_finish: async n=>{
            let a = t.methods.declare_finish(n);
            web3.eth.sendTransaction({
                from: r,
                to: e,
                data: a.encodeABI()
            }, (e,t)=>{
                t && l("declare_finish", t)
            }
            )
        }
        ,
        enter_next_race: async(n,a,s,o)=>{
            let c = t.methods.enter_next_race(n, a, s, o);
            web3.eth.sendTransaction({
                from: r,
                to: e,
                value: i(a, o),
                data: c.encodeABI()
            }, (e,t)=>{
                t && l("enter_next_race", t)
            }
            )
        }
        ,
        collect_winnings: async n=>{
            let a = t.methods.collect_winnings(n);
            web3.eth.sendTransaction({
                from: r,
                to: e,
                data: a.encodeABI()
            }, (e,t)=>{
                t && l("collect_winnings", t)
            }
            )
        }
        ,
        rename_boat: async n=>{
            n = EncodeName(n).substr(0, 66);
            let a = t.methods.rename_boat(n);
            web3.eth.sendTransaction({
                from: r,
                to: e,
                data: a.encodeABI()
            }, (e,t)=>{
                t && l("rename_boat", t)
            }
            )
        }
        ,
        grab_gold: async()=>{
            let n = t.methods.grab_gold();
            web3.eth.sendTransaction({
                from: r,
                to: e,
                data: n.encodeABI()
            }, (e,t)=>{
                t && l("grab_gold", t)
            }
            )
        }
        ,
        get_pool: async()=>{
            try {
                return await t.methods.get_pool().call()
            } catch (e) {
                return console.log("failed pool get"),
                "0"
            }
        }
        ,
        get_race_number: async()=>{
            try {
                return console.log("failed race number get"),
                await t.methods.get_race_number().call()
            } catch (e) {
                return "0"
            }
        }
        ,
        get_weather: async()=>{
            try {
                return console.log("failed weather get"),
                await t.methods.get_weather().call()
            } catch (e) {
                return "0"
            }
        }
        ,
        get_progress: async()=>{
            try {
                return await t.methods.get_progress().call()
            } catch (e) {
                return console.log("get progress failed"),
                {
                    progress: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
                    block_finish: "0",
                    weather: "0",
                    squid: "11",
                    block_now: "0",
                    history: ["0x0", "0x0", "0x0", "0x0", "0x0", "0x0", "0x0", "0x0", "0x0", "0x0"],
                    block_squid: "0"
                }
            }
        }
        ,
        get_times: async()=>{
            try {
                return await t.methods.get_times().call()
            } catch (e) {
                return console.log("get times fail"),
                {
                    block_start: "0",
                    block_finish: "0",
                    block_current: "0"
                }
            }
        }
        ,
        get_boats: async e=>{
            e || (e = 0);
            try {
                return await t.methods.get_boats().call()
            } catch (n) {
                return e < 20 ? await o.get_boats(e + 1) : (t && t.methods && t.methods.get_boats && t.methods.get_boats().call || alert("Error with DApp browser (web3/contract structure missing)"),
                console.log("get boats fail"),
                {
                    owner: ["0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000", "0x0000000000000000000000000000000000000000"],
                    class: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
                    variant: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
                    repellent: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
                })
            }
        }
        ,
        get_name: async e=>{
            try {
                return DecodeName(await t.methods.get_name(e).call())
            } catch (e) {
                return console.log("get name failed"),
                ""
            }
        }
        ,
        get_balance: async()=>{
            try {
                return await t.methods.get_balance().call({
                    from: r
                })
            } catch (e) {
                return console.log("get balance fail"),
                "0"
            }
        }
        ,
        get_boat_count: async()=>{
            try {
                return await t.methods.get_boat_count().call()
            } catch (e) {
                return console.log("get boat count fail"),
                "0"
            }
        }
        ,
        get_pool_past: async e=>{
            try {
                return await t.methods.get_pool_past(e).call()
            } catch (e) {
                return console.log("get pool past failed"),
                "0"
            }
        }
        ,
        init: async()=>{
            await o.get_account(),
            s = await web3.eth.net.getId(),
            o.check_network() ? o.status = "ready" : o.status = "network"
        }
        ,
        get_account: async()=>{
            try {
                let e;
                window.ethereum && ethereum.enable ? (e = await ethereum.enable()) || (console.log("something fucked up, fallback to hard get"),
                e = await web3.eth.getAccounts()) : e = await web3.eth.getAccounts(),
                r = e[0],
                console.log("got account"),
                console.log(r),
                "loading" == o.status && (o.status = "ready")
            } catch (e) {
                console.log("denied"),
                console.log("account set to 0x0"),
                r = "0x0",
                "loading" == o.status && (o.status = "ready")
            }
        }
    };
    function l(e, t) {
        let n = o.transactions[e];
        n.interval && clearInterval(n.interval),
        n.submit(),
        n.hash = t,
        n.interval = setInterval(async()=>{
            let e = await web3.eth.getTransaction(t);
            e && e.blockNumber && (clearInterval(n.interval),
            n.interval = null,
            n.trigger())
        }
        , 900)
    }
    return o.init(),
    o
}
;
function EncodeName(e) {
    return web3.utils.fromAscii(e)
}
function DecodeName(e) {
    let t = web3.utils.toAscii(e);
    return t = t.replace(/\u0000/g, "")
}
function ValidateName(e) {
    return DecodeName(EncodeName(e).substr(0, 66))
}
function Instance(e) {
    Check_web3();
    const t = [{
        constant: !0,
        inputs: [],
        name: "get_weather",
        outputs: [{
            name: "",
            type: "uint256"
        }],
        payable: !1,
        stateMutability: "view",
        type: "function"
    }, {
        constant: !1,
        inputs: [{
            name: "block_finish",
            type: "uint256"
        }],
        name: "declare_finish",
        outputs: [],
        payable: !1,
        stateMutability: "nonpayable",
        type: "function"
    }, {
        constant: !0,
        inputs: [{
            name: "past_race_number",
            type: "uint256"
        }],
        name: "get_pool_past",
        outputs: [{
            name: "pool",
            type: "uint256"
        }],
        payable: !1,
        stateMutability: "view",
        type: "function"
    }, {
        constant: !1,
        inputs: [],
        name: "grab_gold",
        outputs: [],
        payable: !1,
        stateMutability: "nonpayable",
        type: "function"
    }, {
        constant: !1,
        inputs: [{
            name: "block_finish_last",
            type: "uint256"
        }],
        name: "collect_winnings",
        outputs: [],
        payable: !1,
        stateMutability: "nonpayable",
        type: "function"
    }, {
        constant: !1,
        inputs: [],
        name: "declare_void",
        outputs: [],
        payable: !1,
        stateMutability: "nonpayable",
        type: "function"
    }, {
        constant: !1,
        inputs: [{
            name: "class",
            type: "uint256"
        }, {
            name: "PRICE",
            type: "uint256"
        }],
        name: "set_PRICE_CLASS",
        outputs: [],
        payable: !1,
        stateMutability: "nonpayable",
        type: "function"
    }, {
        constant: !0,
        inputs: [],
        name: "get_times",
        outputs: [{
            name: "block_start",
            type: "uint256"
        }, {
            name: "block_finish",
            type: "uint256"
        }, {
            name: "block_current",
            type: "uint256"
        }],
        payable: !1,
        stateMutability: "view",
        type: "function"
    }, {
        constant: !1,
        inputs: [{
            name: "class",
            type: "uint8"
        }, {
            name: "variant",
            type: "uint8"
        }, {
            name: "repellent",
            type: "bool"
        }],
        name: "declare_race",
        outputs: [],
        payable: !0,
        stateMutability: "payable",
        type: "function"
    }, {
        constant: !1,
        inputs: [{
            name: "block_finish_last",
            type: "uint256"
        }, {
            name: "class",
            type: "uint8"
        }, {
            name: "variant",
            type: "uint8"
        }, {
            name: "repellent",
            type: "bool"
        }],
        name: "enter_next_race",
        outputs: [],
        payable: !0,
        stateMutability: "payable",
        type: "function"
    }, {
        constant: !1,
        inputs: [{
            name: "name",
            type: "bytes32"
        }],
        name: "rename_boat",
        outputs: [],
        payable: !1,
        stateMutability: "nonpayable",
        type: "function"
    }, {
        constant: !1,
        inputs: [{
            name: "class",
            type: "uint8"
        }, {
            name: "variant",
            type: "uint8"
        }, {
            name: "repellent",
            type: "bool"
        }],
        name: "enter_race",
        outputs: [],
        payable: !0,
        stateMutability: "payable",
        type: "function"
    }, {
        constant: !0,
        inputs: [],
        name: "get_race_number",
        outputs: [{
            name: "",
            type: "uint256"
        }],
        payable: !1,
        stateMutability: "view",
        type: "function"
    }, {
        constant: !0,
        inputs: [],
        name: "get_boat_count",
        outputs: [{
            name: "boat_count",
            type: "uint256"
        }],
        payable: !1,
        stateMutability: "view",
        type: "function"
    }, {
        constant: !0,
        inputs: [],
        name: "get_balance",
        outputs: [{
            name: "balance",
            type: "uint256"
        }],
        payable: !1,
        stateMutability: "view",
        type: "function"
    }, {
        constant: !0,
        inputs: [],
        name: "get_pool",
        outputs: [{
            name: "",
            type: "uint256"
        }],
        payable: !1,
        stateMutability: "view",
        type: "function"
    }, {
        constant: !0,
        inputs: [],
        name: "get_progress",
        outputs: [{
            name: "progress",
            type: "uint256[10]"
        }, {
            name: "block_finish",
            type: "uint256"
        }, {
            name: "weather",
            type: "uint256"
        }, {
            name: "squid",
            type: "uint256"
        }, {
            name: "block_now",
            type: "uint256"
        }, {
            name: "history",
            type: "bytes32[10]"
        }, {
            name: "block_squid",
            type: "uint256"
        }],
        payable: !1,
        stateMutability: "view",
        type: "function"
    }, {
        constant: !0,
        inputs: [],
        name: "get_boats",
        outputs: [{
            name: "owner",
            type: "address[10]"
        }, {
            name: "class",
            type: "uint8[10]"
        }, {
            name: "variant",
            type: "uint8[10]"
        }, {
            name: "repellent",
            type: "bool[10]"
        }],
        payable: !1,
        stateMutability: "view",
        type: "function"
    }, {
        constant: !0,
        inputs: [{
            name: "boat",
            type: "address"
        }],
        name: "get_name",
        outputs: [{
            name: "name",
            type: "bytes32"
        }],
        payable: !1,
        stateMutability: "view",
        type: "function"
    }, {
        constant: !1,
        inputs: [{
            name: "new_beard",
            type: "address"
        }],
        name: "mutiny",
        outputs: [],
        payable: !1,
        stateMutability: "nonpayable",
        type: "function"
    }, {
        inputs: [],
        payable: !1,
        stateMutability: "nonpayable",
        type: "constructor"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !1,
            name: "race_number",
            type: "uint256"
        }],
        name: "Declare",
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !1,
            name: "race_number",
            type: "uint256"
        }, {
            indexed: !1,
            name: "entrant",
            type: "address"
        }, {
            indexed: !1,
            name: "class",
            type: "uint8"
        }, {
            indexed: !1,
            name: "variant",
            type: "uint8"
        }, {
            indexed: !1,
            name: "repellent",
            type: "bool"
        }],
        name: "Enter",
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !1,
            name: "race_number",
            type: "uint256"
        }, {
            indexed: !1,
            name: "judge",
            type: "address"
        }],
        name: "Void",
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !1,
            name: "race_number",
            type: "uint256"
        }, {
            indexed: !1,
            name: "block_finish",
            type: "uint256"
        }, {
            indexed: !1,
            name: "judge",
            type: "address"
        }],
        name: "Finish",
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !1,
            name: "boat",
            type: "address"
        }, {
            indexed: !1,
            name: "name",
            type: "bytes32"
        }],
        name: "Rename",
        type: "event"
    }, {
        anonymous: !1,
        inputs: [{
            indexed: !1,
            name: "winner",
            type: "address"
        }],
        name: "CashOut",
        type: "event"
    }];
    let n, a = [];
    for (let e in t)
        a.push(t[e]);
    return n = web3.eth.contract ? web3.eth.contract(a, e) : new web3.eth.Contract(a,e)
}
function Check_web3() {
    if ("undefined" != typeof web3)
        web3 = new Web3(web3.currentProvider);
    else {
        let e;
        window.ethereum ? (console.log("window.ethereum"),
        e = window.ethereum) : window.web3 && window.web3.currentProvider ? e = window.web3.currentProvider : (console.log("infura"),
        e = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/2d9d3459d7ef4188a43973a98b27cef7")),
        web3 = new Web3(e)
    }
}

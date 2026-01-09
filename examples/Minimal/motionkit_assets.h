#pragma once
#include "ESP32ServoMotionKit.h"

/*
#include "motionkit_assets.h"

motionkit::MotionKit kit;

void setup()
{
  motionkit::assets::Load(kit);
}

void loop()
{
}
*/

namespace motionkit::assets::servo
{
  inline constexpr const char *front_left = "servo_front_left";
  inline constexpr const char *front_right = "servo_front_right";
  inline constexpr const char *tail = "servo_tail";
}

namespace motionkit::assets::joint
{
  inline constexpr const char *yaw = "yaw";
  inline constexpr const char *pitch = "pitch";
  inline constexpr const char *roll = "roll";
}

namespace motionkit::assets::pose
{
  inline constexpr const char *p_home = "p_home";
  inline constexpr const char *p_wave = "p_wave";
  inline constexpr const char *p_ready = "p_ready";
}

namespace motionkit::assets::sequence
{
  inline constexpr const char *demo = "seq_demo";
  inline constexpr const char *intro = "seq_intro";
}

namespace motionkit::assets::easing
{
  inline constexpr const char *e_linear = "e_linear";
  inline constexpr const char *e_smooth = "e_smooth";
  inline constexpr const char *e_scurve_strong = "e_scurve_strong";
}

namespace motionkit::assets::event
{
  inline constexpr const char *sound_a = "event_sound_a";
  inline constexpr const char *led_flash = "event_led_flash";
}

namespace motionkit::assets
{
  inline void Load(motionkit::MotionKit &kit)
  {

    // Servos
    kit.servo(motionkit::assets::servo::front_left).pwm(18).position().pwmFreq(50).pulseMin(500).pulseMax(2400).pulseCenter(1500).deadband(5).speedLimit(300).angleMin(0).angleMax(180).offset(0);
    kit.servo(motionkit::assets::servo::front_right).pwm(19).position().pwmFreq(50).pulseMin(500).pulseMax(2400).pulseCenter(1500).deadband(5).speedLimit(300).angleMin(0).angleMax(180).offset(0);
    kit.servo(motionkit::assets::servo::tail).ttl(1, "UART0").position().speedLimit(300).angleMin(0).angleMax(180).offset(0);

    // Joints
    kit.joint(motionkit::assets::joint::yaw).servo(motionkit::assets::servo::front_left).reverse(false).offset(0);
    kit.joint(motionkit::assets::joint::yaw).servo(motionkit::assets::servo::front_right).reverse(false).offset(0);
    kit.joint(motionkit::assets::joint::yaw).rangeMin(0);
    kit.joint(motionkit::assets::joint::yaw).rangeMax(0);
    kit.joint(motionkit::assets::joint::pitch).servo(motionkit::assets::servo::front_left).reverse(false).offset(0);
    kit.joint(motionkit::assets::joint::pitch).rangeMin(0);
    kit.joint(motionkit::assets::joint::pitch).rangeMax(0);
    kit.joint(motionkit::assets::joint::roll).servo(motionkit::assets::servo::tail).reverse(false).offset(0);
    kit.joint(motionkit::assets::joint::roll).rangeMin(0);
    kit.joint(motionkit::assets::joint::roll).rangeMax(0);

    // Easings
    kit.easing(motionkit::assets::easing::e_linear).preset("linear");
    kit.easing(motionkit::assets::easing::e_smooth).preset("warpcurve").param("param0", 180).param("param1", 128).param("param2", 128).param("param3", 0).param("param4", 170).param("param5", 160);
    kit.easing(motionkit::assets::easing::e_scurve_strong).preset("warpcurve").param("param0", 230).param("param1", 128).param("param2", 128).param("param3", 0).param("param4", 170).param("param5", 160);

    // Events
    kit.event(motionkit::assets::event::sound_a).number(100);
    kit.event(motionkit::assets::event::led_flash).number(210);

    // Poses
    kit.pose(motionkit::assets::pose::p_home).target(motionkit::assets::joint::yaw, 0);
    kit.pose(motionkit::assets::pose::p_home).target(motionkit::assets::joint::pitch, 0);
    kit.pose(motionkit::assets::pose::p_home).target(motionkit::assets::joint::roll, 0);
    kit.pose(motionkit::assets::pose::p_wave).target(motionkit::assets::joint::yaw, 20);
    kit.pose(motionkit::assets::pose::p_wave).target(motionkit::assets::joint::pitch, -10);
    kit.pose(motionkit::assets::pose::p_ready).target(motionkit::assets::joint::yaw, 5);
    kit.pose(motionkit::assets::pose::p_ready).target(motionkit::assets::joint::roll, 5);

    // Sequences
    kit.sequence(motionkit::assets::sequence::demo).step(motionkit::assets::pose::p_home, 500, motionkit::assets::easing::e_smooth);
    kit.sequence(motionkit::assets::sequence::demo).step(motionkit::assets::pose::p_wave, 800, motionkit::assets::easing::e_linear);
    kit.sequence(motionkit::assets::sequence::demo).step(motionkit::assets::pose::p_home, 400, motionkit::assets::easing::e_linear);
    kit.sequence(motionkit::assets::sequence::demo).step(motionkit::assets::pose::p_ready, 600, motionkit::assets::easing::e_smooth);
    kit.sequence(motionkit::assets::sequence::intro).step(motionkit::assets::pose::p_home, 400, motionkit::assets::easing::e_linear);
    kit.sequence(motionkit::assets::sequence::intro).step(motionkit::assets::pose::p_ready, 600, motionkit::assets::easing::e_smooth);
  }
}

/* MK_RICH_UI_JSON_BEGIN
{
  "meta": {
    "schema": "motionkit",
    "version": "0.1.0"
  },
  "servos": [
    {
      "id": "servo_front_left",
      "type": "pwm",
      "mode": "position",
      "displayOrder": 10,
      "description": "Front left servo",
      "previewOffset": 0,
      "previewDirection": "cw",
      "pin": 18,
      "pwm": {
        "freq": 50,
        "pulseMin": 500,
        "pulseMax": 2400,
        "center": 1500,
        "deadband": 5,
        "speed": 300,
        "angleMin": 0,
        "angleMax": 180,
        "offset": 0
      }
    },
    {
      "id": "servo_front_right",
      "type": "pwm",
      "mode": "position",
      "displayOrder": 20,
      "description": "Front right servo",
      "previewOffset": 0,
      "previewDirection": "cw",
      "pin": 19,
      "pwm": {
        "freq": 50,
        "pulseMin": 500,
        "pulseMax": 2400,
        "center": 1500,
        "deadband": 5,
        "speed": 300,
        "angleMin": 0,
        "angleMax": 180,
        "offset": 0
      }
    },
    {
      "id": "servo_tail",
      "type": "ttl",
      "mode": "position",
      "displayOrder": 30,
      "description": "Tail servo",
      "previewOffset": 0,
      "previewDirection": "cw",
      "ttl": {
        "address": 1,
        "bus": "UART0",
        "speed": 300,
        "angleMin": 0,
        "angleMax": 180,
        "offset": 0
      }
    }
  ],
  "joints": [
    {
      "id": "yaw",
      "servoRefs": [
        {
          "servoId": "servo_front_left",
          "reverse": false,
          "offset": 0,
          "min": 0,
          "max": 180
        },
        {
          "servoId": "servo_front_right",
          "reverse": false,
          "offset": 0,
          "min": 0,
          "max": 180
        }
      ],
      "displayOrder": 10,
      "description": "Head yaw",
      "previewOffset": 0,
      "previewDirection": "cw",
      "rangeMin": 0,
      "rangeMax": 0
    },
    {
      "id": "pitch",
      "servoRefs": [
        {
          "servoId": "servo_front_left",
          "reverse": false,
          "offset": 0,
          "min": 0,
          "max": 180
        }
      ],
      "displayOrder": 20,
      "description": "Head pitch",
      "previewOffset": 0,
      "previewDirection": "cw",
      "rangeMin": 0,
      "rangeMax": 0
    },
    {
      "id": "roll",
      "servoRefs": [
        {
          "servoId": "servo_tail",
          "reverse": false,
          "offset": 0,
          "min": 0,
          "max": 180
        }
      ],
      "displayOrder": 30,
      "description": "Head roll",
      "previewOffset": 0,
      "previewDirection": "cw",
      "rangeMin": 0,
      "rangeMax": 0
    }
  ],
  "jointGroups": [
    {
      "id": "jg_arms",
      "jointIds": [
        "yaw",
        "pitch",
        "roll"
      ],
      "displayOrder": 10,
      "description": "Arm joints"
    },
    {
      "id": "jg_head",
      "jointIds": [
        "yaw",
        "pitch"
      ],
      "displayOrder": 20,
      "description": "Head joints"
    }
  ],
  "poses": [
    {
      "id": "p_home",
      "jointTargets": [
        {
          "jointId": "yaw",
          "deg": 0
        },
        {
          "jointId": "pitch",
          "deg": 0
        },
        {
          "jointId": "roll",
          "deg": 0
        }
      ],
      "displayOrder": 10,
      "description": "Neutral pose"
    },
    {
      "id": "p_wave",
      "jointTargets": [
        {
          "jointId": "yaw",
          "deg": 20
        },
        {
          "jointId": "pitch",
          "deg": -10
        }
      ],
      "displayOrder": 20,
      "description": "Wave pose",
      "groupId": "jg_arms"
    },
    {
      "id": "p_ready",
      "jointTargets": [
        {
          "jointId": "yaw",
          "deg": 5
        },
        {
          "jointId": "roll",
          "deg": 5
        }
      ],
      "displayOrder": 30,
      "description": "Ready pose",
      "groupId": "jg_head"
    }
  ],
  "sequences": [
    {
      "id": "seq_demo",
      "steps": [
        {
          "poseId": "p_home",
          "moveMs": 500,
          "easingId": "e_smooth"
        },
        {
          "poseId": "p_wave",
          "moveMs": 800,
          "easingId": "e_linear"
        },
        {
          "sequenceId": "seq_intro"
        }
      ],
      "displayOrder": 10,
      "description": "Demo sequence"
    },
    {
      "id": "seq_intro",
      "steps": [
        {
          "poseId": "p_home",
          "moveMs": 400,
          "easingId": "e_linear"
        },
        {
          "poseId": "p_ready",
          "moveMs": 600,
          "easingId": "e_smooth"
        }
      ],
      "displayOrder": 20,
      "description": "Intro sequence"
    }
  ],
  "events": [
    {
      "id": "event_sound_a",
      "number": 100,
      "displayOrder": 10,
      "description": "Play sound A"
    },
    {
      "id": "event_led_flash",
      "number": 210,
      "displayOrder": 20,
      "description": "Flash LED"
    }
  ],
  "easings": [
    {
      "id": "e_linear",
      "type": "preset",
      "preset": "linear",
      "displayOrder": 10
    },
    {
      "id": "e_smooth",
      "type": "custom",
      "preset": "warpcurve",
      "displayOrder": 20,
      "description": "Smooth easing for demo",
      "params": {
        "param0": 180,
        "param1": 128,
        "param2": 128,
        "param3": 0,
        "param4": 170,
        "param5": 160
      }
    },
    {
      "id": "e_scurve_strong",
      "type": "custom",
      "preset": "warpcurve",
      "displayOrder": 30,
      "description": "Strong S-curve",
      "params": {
        "param0": 230,
        "param1": 128,
        "param2": 128,
        "param3": 0,
        "param4": 170,
        "param5": 160
      }
    }
  ]
}
MK_RICH_UI_JSON_END */
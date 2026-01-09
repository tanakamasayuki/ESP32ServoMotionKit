#pragma once
#include "ESP32ServoMotionKit.h"

namespace motionkit::assets::servo
{
  inline constexpr const char *front_left = "servo_front_left";
  inline constexpr const char *front_right = "servo_front_right";
  inline constexpr const char *tail = "servo_tail";
  inline constexpr const char *head1 = "servo_head1";
  inline constexpr const char *head2 = "servo_head2";
  inline constexpr const char *new_8 = "servo_new_8";
  inline constexpr const char *new_8_copy = "servo_new_8_copy";
  inline constexpr const char *new_8_copy_copy = "servo_new_8_copy_copy";
  inline constexpr const char *_12servo_サ_ボ123_123 = "12servo_サーボ123-123";
}

namespace motionkit::assets::joint
{
  inline constexpr const char *yaw = "yaw";
  inline constexpr const char *pitch = "pitch";
  inline constexpr const char *roll = "roll";
  inline constexpr const char *head = "head";
  inline constexpr const char *new_5 = "joint_new_5";
  inline constexpr const char *new_6 = "joint_new_6";
  inline constexpr const char *new_6_copy = "joint_new_6_copy";
  inline constexpr const char *new_6_copy_copy = "joint_new_6_copy_copy";
}

namespace motionkit::assets::pose
{
  inline constexpr const char *p_home = "p_home";
  inline constexpr const char *p_wave = "p_wave";
  inline constexpr const char *p_ready = "p_ready";
  inline constexpr const char *p_ready_copy = "p_ready_copy";
  inline constexpr const char *p_ready_copy_copy = "p_ready_copy_copy";
  inline constexpr const char *p_ready_copy_copy_copy = "p_ready_copy_copy_copy";
  inline constexpr const char *new_7 = "pose_new_7";
}

namespace motionkit::assets::sequence
{
  inline constexpr const char *new_3 = "seq_new_3";
  inline constexpr const char *new_3_copy = "seq_new_3_copy";
  inline constexpr const char *new_3_copy_copy = "seq_new_3_copy_copy";
  inline constexpr const char *new_4 = "seq_new_4";
  inline constexpr const char *new_5 = "seq_new_5";
  inline constexpr const char *new_6 = "seq_new_6";
}

namespace motionkit::assets::easing
{
  inline constexpr const char *e_linear = "e_linear";
  inline constexpr const char *e_smooth = "e_smooth";
  inline constexpr const char *e_scurve_strong = "e_scurve_strong";
  inline constexpr const char *e_new_4 = "e_new_4";
  inline constexpr const char *e_new_5 = "e_new_5";
  inline constexpr const char *new_6 = "easing_new_6";
}

namespace motionkit::assets::event
{
  inline constexpr const char *sound_a = "event_sound_a";
  inline constexpr const char *led_flash = "event_led_flash";
  inline constexpr const char *new_3 = "event_new_3";
  inline constexpr const char *new_4 = "event_new_4";
  inline constexpr const char *new_5 = "event_new_5";
  inline constexpr const char *new_6 = "event_new_6";
  inline constexpr const char *new_7 = "event_new_7";
  inline constexpr const char *new_8 = "event_new_8";
  inline constexpr const char *new_8_2 = "event_new-8";
  inline constexpr const char *int_2 = "event_int";
}

namespace motionkit::assets
{
  inline void Load(motionkit::MotionKit &kit)
  {

    // Servos
    kit.servo(motionkit::assets::servo::front_left).pwm(18).position().pwmFreq(50).pulseMin(500).pulseMax(2400).pulseCenter(1500).deadband(5).speedLimit(300).angleMin(0).angleMax(180).offset(0);
    kit.servo(motionkit::assets::servo::front_right).pwm(19).position().pwmFreq(50).pulseMin(500).pulseMax(2400).pulseCenter(1500).deadband(5).speedLimit(300).angleMin(0).angleMax(180).offset(0);
    kit.servo(motionkit::assets::servo::tail).ttl(1, "UART0").position().speedLimit(300).angleMin(0).angleMax(360).offset(0);
    kit.servo(motionkit::assets::servo::head1).ttl(1, "UART0").position().speedLimit(300).angleMin(0).angleMax(270).offset(0);
    kit.servo(motionkit::assets::servo::head2).ttl(2, "UART0").position().speedLimit(300).angleMin(0).angleMax(270).offset(0);
    kit.servo(motionkit::assets::servo::new_8).pwm(18).position().pwmFreq(50).pulseMin(500).pulseMax(2400).pulseCenter(1500).deadband(5).speedLimit(300).angleMin(1).angleMax(179).offset(0);
    kit.servo(motionkit::assets::servo::new_8_copy).pwm(18).position().pwmFreq(50).pulseMin(500).pulseMax(2400).pulseCenter(1500).deadband(5).speedLimit(300).angleMin(1).angleMax(179).offset(0);
    kit.servo(motionkit::assets::servo::new_8_copy_copy).pwm(18).position().pwmFreq(50).pulseMin(500).pulseMax(2400).pulseCenter(1500).deadband(5).speedLimit(300).angleMin(1).angleMax(179).offset(0);
    kit.servo(motionkit::assets::servo::_12servo_サ_ボ123_123).pwm(18).position().pwmFreq(50).pulseMin(500).pulseMax(2400).pulseCenter(1500).deadband(5).speedLimit(300).angleMin(1).angleMax(179).offset(0);

    // Joints
    kit.joint(motionkit::assets::joint::yaw).servo(motionkit::assets::servo::front_left).reverse(false).offset(0);
    kit.joint(motionkit::assets::joint::yaw).servo(motionkit::assets::servo::front_right).reverse(false).offset(0);
    kit.joint(motionkit::assets::joint::yaw).servo(motionkit::assets::servo::tail).reverse(false).offset(0);
    kit.joint(motionkit::assets::joint::yaw).rangeMin(50);
    kit.joint(motionkit::assets::joint::yaw).rangeMax(150);
    kit.joint(motionkit::assets::joint::pitch).servo(motionkit::assets::servo::front_right).reverse(false).offset(0);
    kit.joint(motionkit::assets::joint::pitch).rangeMin(0);
    kit.joint(motionkit::assets::joint::pitch).rangeMax(180);
    kit.joint(motionkit::assets::joint::roll).servo(motionkit::assets::servo::tail).reverse(false).offset(0);
    kit.joint(motionkit::assets::joint::roll).rangeMin(0);
    kit.joint(motionkit::assets::joint::roll).rangeMax(45);
    kit.joint(motionkit::assets::joint::head).servo(motionkit::assets::servo::head1).reverse(false).offset(0);
    kit.joint(motionkit::assets::joint::head).servo(motionkit::assets::servo::head2).reverse(true).offset(0);
    kit.joint(motionkit::assets::joint::head).rangeMin(0);
    kit.joint(motionkit::assets::joint::head).rangeMax(45);
    kit.joint(motionkit::assets::joint::new_5).servo(motionkit::assets::servo::front_left).reverse(false).offset(0);
    kit.joint(motionkit::assets::joint::new_5).rangeMin(0);
    kit.joint(motionkit::assets::joint::new_5).rangeMax(180);
    kit.joint(motionkit::assets::joint::new_6).servo(motionkit::assets::servo::front_left).reverse(false).offset(0);
    kit.joint(motionkit::assets::joint::new_6).rangeMin(0);
    kit.joint(motionkit::assets::joint::new_6).rangeMax(180);
    kit.joint(motionkit::assets::joint::new_6_copy).servo(motionkit::assets::servo::front_left).reverse(false).offset(0);
    kit.joint(motionkit::assets::joint::new_6_copy).rangeMin(0);
    kit.joint(motionkit::assets::joint::new_6_copy).rangeMax(180);
    kit.joint(motionkit::assets::joint::new_6_copy_copy).servo(motionkit::assets::servo::front_left).reverse(false).offset(0);
    kit.joint(motionkit::assets::joint::new_6_copy_copy).rangeMin(0);
    kit.joint(motionkit::assets::joint::new_6_copy_copy).rangeMax(180);

    // Easings
    kit.easing(motionkit::assets::easing::e_linear).preset("linear");
    kit.easing(motionkit::assets::easing::e_smooth).preset("warpcurve").param("param0", 180).param("param1", 128).param("param2", 128).param("param3", 0).param("param4", 170).param("param5", 160);
    kit.easing(motionkit::assets::easing::e_scurve_strong).preset("warpcurve").param("param0", 230).param("param1", 128).param("param2", 128).param("param3", 0).param("param4", 170).param("param5", 160);
    kit.easing(motionkit::assets::easing::e_new_4).preset("linear");
    kit.easing(motionkit::assets::easing::e_new_5).preset("linear");
    kit.easing(motionkit::assets::easing::new_6).preset("linear");

    // Events
    kit.event(motionkit::assets::event::sound_a).number(100);
    kit.event(motionkit::assets::event::led_flash).number(200);
    kit.event(motionkit::assets::event::new_3).number(300);
    kit.event(motionkit::assets::event::new_4).number(400);
    kit.event(motionkit::assets::event::new_5).number(410);
    kit.event(motionkit::assets::event::new_6).number(420);
    kit.event(motionkit::assets::event::new_7).number(430);
    kit.event(motionkit::assets::event::new_8).number(440);
    kit.event(motionkit::assets::event::new_8_2).number(450);
    kit.event(motionkit::assets::event::int_2).number(460);

    // Poses
    kit.pose(motionkit::assets::pose::p_home).target(motionkit::assets::joint::yaw, 50);
    kit.pose(motionkit::assets::pose::p_home).target(motionkit::assets::joint::pitch, 0);
    kit.pose(motionkit::assets::pose::p_home).target(motionkit::assets::joint::roll, 0);
    kit.pose(motionkit::assets::pose::p_home).trigger("start", motionkit::assets::event::sound_a);
    kit.pose(motionkit::assets::pose::p_wave).target(motionkit::assets::joint::yaw, 20);
    kit.pose(motionkit::assets::pose::p_wave).target(motionkit::assets::joint::pitch, -10);
    kit.pose(motionkit::assets::pose::p_wave).trigger("start", motionkit::assets::event::sound_a);
    kit.pose(motionkit::assets::pose::p_ready).target(motionkit::assets::joint::head, 0);
    kit.pose(motionkit::assets::pose::p_ready).trigger("start", motionkit::assets::event::sound_a);
    kit.pose(motionkit::assets::pose::p_ready_copy).target(motionkit::assets::joint::head, 0);
    kit.pose(motionkit::assets::pose::p_ready_copy).trigger("start", motionkit::assets::event::sound_a);
    kit.pose(motionkit::assets::pose::p_ready_copy_copy).target(motionkit::assets::joint::head, 0);
    kit.pose(motionkit::assets::pose::p_ready_copy_copy).trigger("start", motionkit::assets::event::sound_a);
    kit.pose(motionkit::assets::pose::p_ready_copy_copy_copy).target(motionkit::assets::joint::head, 0);
    kit.pose(motionkit::assets::pose::p_ready_copy_copy_copy).trigger("start", motionkit::assets::event::sound_a);
    kit.pose(motionkit::assets::pose::new_7).target(motionkit::assets::joint::yaw, 50);

    // Sequences
    kit.sequence(motionkit::assets::sequence::new_3).step(motionkit::assets::pose::p_home, 2200, motionkit::assets::easing::e_smooth);
    kit.sequence(motionkit::assets::sequence::new_3).step(motionkit::assets::pose::p_wave, 500, motionkit::assets::easing::e_scurve_strong);
    kit.sequence(motionkit::assets::sequence::new_3).step(motionkit::assets::pose::p_ready, 500, motionkit::assets::easing::e_linear);
    kit.sequence(motionkit::assets::sequence::new_3).step(motionkit::assets::pose::p_home, 507, motionkit::assets::easing::e_linear);
    kit.sequence(motionkit::assets::sequence::new_3).trigger("sequence_end", motionkit::assets::event::led_flash);
    kit.sequence(motionkit::assets::sequence::new_3_copy).step(motionkit::assets::pose::p_home, 2200, motionkit::assets::easing::e_smooth);
    kit.sequence(motionkit::assets::sequence::new_3_copy).step(motionkit::assets::pose::p_wave, 500, motionkit::assets::easing::e_scurve_strong);
    kit.sequence(motionkit::assets::sequence::new_3_copy).step(motionkit::assets::pose::p_home, 500, motionkit::assets::easing::e_linear);
    kit.sequence(motionkit::assets::sequence::new_3_copy).step(motionkit::assets::pose::p_home, 507, motionkit::assets::easing::e_linear);
    kit.sequence(motionkit::assets::sequence::new_3_copy).trigger("sequence_end", motionkit::assets::event::led_flash);
    kit.sequence(motionkit::assets::sequence::new_3_copy_copy).step(motionkit::assets::pose::p_home, 2200, motionkit::assets::easing::e_smooth);
    kit.sequence(motionkit::assets::sequence::new_3_copy_copy).step(motionkit::assets::pose::p_wave, 500, motionkit::assets::easing::e_scurve_strong);
    kit.sequence(motionkit::assets::sequence::new_3_copy_copy).step(motionkit::assets::pose::p_home, 500, motionkit::assets::easing::e_linear);
    kit.sequence(motionkit::assets::sequence::new_3_copy_copy).step(motionkit::assets::pose::p_home, 507, motionkit::assets::easing::e_linear);
    kit.sequence(motionkit::assets::sequence::new_3_copy_copy).trigger("sequence_end", motionkit::assets::event::led_flash);
    kit.sequence(motionkit::assets::sequence::new_4).step(motionkit::assets::pose::p_home, 500, motionkit::assets::easing::e_linear, kit.easingOverride().set(motionkit::assets::joint::pitch, motionkit::assets::easing::e_smooth));
    kit.sequence(motionkit::assets::sequence::new_5).step(motionkit::assets::pose::p_home, 5000, motionkit::assets::easing::e_linear);
    kit.sequence(motionkit::assets::sequence::new_5).step(motionkit::assets::pose::p_home, 500, motionkit::assets::easing::e_linear, kit.easingOverride().set(motionkit::assets::joint::pitch, motionkit::assets::easing::e_smooth));
    kit.sequence(motionkit::assets::sequence::new_5).step(motionkit::assets::pose::p_home, 5000, motionkit::assets::easing::e_linear);
    kit.sequence(motionkit::assets::sequence::new_6).step(motionkit::assets::pose::p_home, 500, motionkit::assets::easing::e_linear);
  }
}
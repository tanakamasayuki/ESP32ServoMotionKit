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
  inline constexpr const char *_12servo____123_123 = "12servo_サーボ123-123";
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
}

namespace motionkit::assets
{
  inline void Load(motionkit::MotionKit &kit)
  {

    // Servos
    auto servo_servo_front_left = kit.servo(motionkit::assets::servo::front_left).pwm(18).position();
    auto servo_servo_front_right = kit.servo(motionkit::assets::servo::front_right).pwm(19).position();
    auto servo_servo_tail = kit.servo(motionkit::assets::servo::tail);
    auto servo_servo_head1 = kit.servo(motionkit::assets::servo::head1);
    auto servo_servo_head2 = kit.servo(motionkit::assets::servo::head2);
    auto servo_servo_new_8 = kit.servo(motionkit::assets::servo::new_8).pwm(18).position();
    auto servo_servo_new_8_copy = kit.servo(motionkit::assets::servo::new_8_copy).pwm(18).position();
    auto servo_servo_new_8_copy_copy = kit.servo(motionkit::assets::servo::new_8_copy_copy).pwm(18).position();
    auto servo__12servo____123_123 = kit.servo(motionkit::assets::servo::_12servo____123_123).pwm(18).position();

    // Joints
    auto joint_yaw = kit.joint(motionkit::assets::joint::yaw);
    joint_yaw.servo(motionkit::assets::servo::front_left);
    joint_yaw.servo(motionkit::assets::servo::front_right);
    joint_yaw.servo(motionkit::assets::servo::tail);
    auto joint_pitch = kit.joint(motionkit::assets::joint::pitch);
    joint_pitch.servo(motionkit::assets::servo::front_right);
    auto joint_roll = kit.joint(motionkit::assets::joint::roll);
    joint_roll.servo(motionkit::assets::servo::tail);
    auto joint_head = kit.joint(motionkit::assets::joint::head);
    joint_head.servo(motionkit::assets::servo::head1);
    joint_head.servo(motionkit::assets::servo::head2);
    auto joint_joint_new_5 = kit.joint(motionkit::assets::joint::new_5);
    joint_joint_new_5.servo(motionkit::assets::servo::front_left);
    auto joint_joint_new_6 = kit.joint(motionkit::assets::joint::new_6);
    joint_joint_new_6.servo(motionkit::assets::servo::front_left);
    auto joint_joint_new_6_copy = kit.joint(motionkit::assets::joint::new_6_copy);
    joint_joint_new_6_copy.servo(motionkit::assets::servo::front_left);
    auto joint_joint_new_6_copy_copy = kit.joint(motionkit::assets::joint::new_6_copy_copy);
    joint_joint_new_6_copy_copy.servo(motionkit::assets::servo::front_left);

    // Easings
    auto easing_e_linear = kit.easing(motionkit::assets::easing::e_linear).preset("linear");
    auto easing_e_smooth = kit.easing(motionkit::assets::easing::e_smooth).preset("warpcurve");
    easing_e_smooth.param("param0", 180);
    easing_e_smooth.param("param1", 128);
    easing_e_smooth.param("param2", 128);
    easing_e_smooth.param("param3", 0);
    easing_e_smooth.param("param4", 170);
    easing_e_smooth.param("param5", 160);
    auto easing_e_scurve_strong = kit.easing(motionkit::assets::easing::e_scurve_strong).preset("warpcurve");
    easing_e_scurve_strong.param("param0", 230);
    easing_e_scurve_strong.param("param1", 128);
    easing_e_scurve_strong.param("param2", 128);
    easing_e_scurve_strong.param("param3", 0);
    easing_e_scurve_strong.param("param4", 170);
    easing_e_scurve_strong.param("param5", 160);
    auto easing_e_new_4 = kit.easing(motionkit::assets::easing::e_new_4).preset("linear");
    auto easing_e_new_5 = kit.easing(motionkit::assets::easing::e_new_5).preset("linear");
    auto easing_easing_new_6 = kit.easing(motionkit::assets::easing::new_6).preset("linear");

    // Poses
    auto pose_p_home = kit.pose(motionkit::assets::pose::p_home).target(motionkit::assets::joint::yaw, 50).target(motionkit::assets::joint::pitch, 0).target(motionkit::assets::joint::roll, 0);
    auto pose_p_wave = kit.pose(motionkit::assets::pose::p_wave).target(motionkit::assets::joint::yaw, 20).target(motionkit::assets::joint::pitch, -10);
    auto pose_p_ready = kit.pose(motionkit::assets::pose::p_ready).target(motionkit::assets::joint::head, 0);
    auto pose_p_ready_copy = kit.pose(motionkit::assets::pose::p_ready_copy).target(motionkit::assets::joint::head, 0);
    auto pose_p_ready_copy_copy = kit.pose(motionkit::assets::pose::p_ready_copy_copy).target(motionkit::assets::joint::head, 0);
    auto pose_p_ready_copy_copy_copy = kit.pose(motionkit::assets::pose::p_ready_copy_copy_copy).target(motionkit::assets::joint::head, 0);
    auto pose_pose_new_7 = kit.pose(motionkit::assets::pose::new_7).target(motionkit::assets::joint::yaw, 50);

    // Sequences
    auto sequence_seq_new_3 = kit.sequence(motionkit::assets::sequence::new_3).step(motionkit::assets::pose::p_home, 2200, motionkit::assets::easing::e_smooth).step(motionkit::assets::pose::p_wave, 500, motionkit::assets::easing::e_scurve_strong).step(motionkit::assets::pose::p_ready, 500, motionkit::assets::easing::e_linear).step(motionkit::assets::pose::p_home, 507, motionkit::assets::easing::e_linear);
    auto sequence_seq_new_3_copy = kit.sequence(motionkit::assets::sequence::new_3_copy).step(motionkit::assets::pose::p_home, 2200, motionkit::assets::easing::e_smooth).step(motionkit::assets::pose::p_wave, 500, motionkit::assets::easing::e_scurve_strong).step(motionkit::assets::pose::p_home, 500, motionkit::assets::easing::e_linear).step(motionkit::assets::pose::p_home, 507, motionkit::assets::easing::e_linear);
    auto sequence_seq_new_3_copy_copy = kit.sequence(motionkit::assets::sequence::new_3_copy_copy).step(motionkit::assets::pose::p_home, 2200, motionkit::assets::easing::e_smooth).step(motionkit::assets::pose::p_wave, 500, motionkit::assets::easing::e_scurve_strong).step(motionkit::assets::pose::p_home, 500, motionkit::assets::easing::e_linear).step(motionkit::assets::pose::p_home, 507, motionkit::assets::easing::e_linear);
    auto sequence_seq_new_4 = kit.sequence(motionkit::assets::sequence::new_4).step(motionkit::assets::pose::p_home, 500, motionkit::assets::easing::e_linear, kit.easingOverride().set(motionkit::assets::joint::pitch, motionkit::assets::easing::e_smooth));
    auto sequence_seq_new_5 = kit.sequence(motionkit::assets::sequence::new_5).step(motionkit::assets::pose::p_home, 5000, motionkit::assets::easing::e_linear).step(motionkit::assets::pose::p_home, 500, motionkit::assets::easing::e_linear, kit.easingOverride().set(motionkit::assets::joint::pitch, motionkit::assets::easing::e_smooth)).step(motionkit::assets::pose::p_home, 5000, motionkit::assets::easing::e_linear);
    auto sequence_seq_new_6 = kit.sequence(motionkit::assets::sequence::new_6).step(motionkit::assets::pose::p_home, 500, motionkit::assets::easing::e_linear);
  }
}
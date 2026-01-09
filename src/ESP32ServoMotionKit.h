#pragma once

namespace motionkit
{
    class EasingOverride
    {
    public:
        EasingOverride &set(const char *joint_id, const char *easing_id)
        {
            (void)joint_id;
            (void)easing_id;
            return *this;
        }
    };

    class Servo
    {
    public:
        Servo &pwm(int pin)
        {
            (void)pin;
            return *this;
        }
        Servo &ttl(int address, const char *bus)
        {
            (void)address;
            (void)bus;
            return *this;
        }
        Servo &position()
        {
            return *this;
        }
        Servo &wheel()
        {
            return *this;
        }
        Servo &pwmFreq(int hz)
        {
            (void)hz;
            return *this;
        }
        Servo &pulseMin(int us)
        {
            (void)us;
            return *this;
        }
        Servo &pulseMax(int us)
        {
            (void)us;
            return *this;
        }
        Servo &pulseCenter(int us)
        {
            (void)us;
            return *this;
        }
        Servo &deadband(int us)
        {
            (void)us;
            return *this;
        }
        Servo &speedLimit(int deg_per_s)
        {
            (void)deg_per_s;
            return *this;
        }
        Servo &angleMin(int deg)
        {
            (void)deg;
            return *this;
        }
        Servo &angleMax(int deg)
        {
            (void)deg;
            return *this;
        }
        Servo &offset(int deg)
        {
            (void)deg;
            return *this;
        }
    };

    class JointServoRef
    {
    public:
        JointServoRef &reverse(bool enabled)
        {
            (void)enabled;
            return *this;
        }
        JointServoRef &offset(int deg)
        {
            (void)deg;
            return *this;
        }
    };

    class Joint
    {
    public:
        JointServoRef servo(const char *servo_id)
        {
            (void)servo_id;
            return JointServoRef();
        }
        Joint &rangeMin(int deg)
        {
            (void)deg;
            return *this;
        }
        Joint &rangeMax(int deg)
        {
            (void)deg;
            return *this;
        }
    };

    class Pose
    {
    public:
        Pose &target(const char *joint_id, int deg)
        {
            (void)joint_id;
            (void)deg;
            return *this;
        }
        Pose &trigger(const char *at, const char *event_id)
        {
            (void)at;
            (void)event_id;
            return *this;
        }
    };

    class Easing
    {
    public:
        Easing &preset(const char *name)
        {
            (void)name;
            return *this;
        }
        Easing &param(const char *key, int value)
        {
            (void)key;
            (void)value;
            return *this;
        }
    };

    class Event
    {
    public:
        Event &number(int value)
        {
            (void)value;
            return *this;
        }
    };

    class Sequence
    {
    public:
        Sequence &step(const char *pose_id, int move_ms, const char *easing_id)
        {
            (void)pose_id;
            (void)move_ms;
            (void)easing_id;
            return *this;
        }
        Sequence &step(const char *pose_id, int move_ms, const char *easing_id, const EasingOverride &override_ref)
        {
            (void)pose_id;
            (void)move_ms;
            (void)easing_id;
            (void)override_ref;
            return *this;
        }
        Sequence &trigger(const char *at, const char *event_id)
        {
            (void)at;
            (void)event_id;
            return *this;
        }
    };

    class MotionKit
    {
    public:
        Servo servo(const char *id)
        {
            (void)id;
            return Servo();
        }
        Joint joint(const char *id)
        {
            (void)id;
            return Joint();
        }
        Pose pose(const char *id)
        {
            (void)id;
            return Pose();
        }
        Sequence sequence(const char *id)
        {
            (void)id;
            return Sequence();
        }
        Easing easing(const char *id)
        {
            (void)id;
            return Easing();
        }
        Event event(const char *id)
        {
            (void)id;
            return Event();
        }
        EasingOverride easingOverride()
        {
            return EasingOverride();
        }
    };
}

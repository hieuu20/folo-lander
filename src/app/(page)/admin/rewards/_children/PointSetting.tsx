"use client";

import React, { useCallback, useEffect, useState } from 'react';
import { PointSetting } from '@/types/pointSetting';

export function PointSettingUi() {
  const [data, setData] = useState<PointSetting[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/point");
      const resData = await res.json();

      if (resData.data) {
        setData(resData.data);
      }
    } catch (err) {
      console.log({ err });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onUpdate = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/point", {
        method: "PUT",
        body: JSON.stringify(data)
      });
      const resData = await res.json();
      if (resData.data) {
        fetchData();
      }
    } catch (err) {
      console.log({ err });
    } finally {
      setLoading(false);
    }
  }, [data, fetchData]);

  const rolePointSetting = data.filter(o => o.roleId);
  const socialPointSetting = data.filter(o => o.socialId);

  const onChange = useCallback((value: string, id: string) => {
    setData(data.map(o => o._id == id ? { ...o, point: parseInt(value) } : o));
  }, [data]);

  return (
    <div className="max-w-xl pl-4 pb-6">
      <Stack gap={24}>
        <div>
          <Title order={5} fz={14} className="mb-4">
            Points earning for each success referral:
          </Title>
          <Stack gap={16}>
            {rolePointSetting.map((o) => {
              return (
                <InputWithSuffix
                  key={o._id}
                  setting={o}
                  required
                  onChange={onChange}
                />
              );
            })}
          </Stack>
        </div>

        <div>
          <Title order={5} fz={14} className="mb-4">
            Points earning for social share (1 time):
          </Title>

          <Stack gap={16}>
            {socialPointSetting.map((o) => {
              return (
                <InputWithSuffix
                  key={o._id}
                  required
                  setting={o}
                  onChange={onChange}
                />
              );
            })}
          </Stack>
        </div>

        <Group>
          <Button
            loading={loading}
            className="bg-[#435EFB] text-white hover:scale-105 transition-all duration-200"
            onClick={onUpdate}
          >
            Save changes
          </Button>
        </Group>
      </Stack>
    </div>
  );
}



import { TextInput, Stack, Title, Button, Group } from "@mantine/core";

const InputWithSuffix = ({
  required = false,
  setting,
  onChange
}: {
  setting: PointSetting
  required?: boolean;
  onChange: (value: string, id: string) => void
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-[#4D5053]">
        {setting.role?.name || setting.social?.name} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative w-[320px]">
        <TextInput
          value={setting.point}
          type="number"
          classNames={{
            input: "pr-16 text-sm text-[#131416] rounded-lg",
          }}
          onChange={e => {
            onChange(e.target.value, setting._id);
          }}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#4D5053]">
          points
        </span>
      </div>
    </div>
  );
};


PGDMP     *        
            {            demo    15.2    15.2     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    24601    demo    DATABASE     w   CREATE DATABASE demo WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_World.1252';
    DROP DATABASE demo;
                postgres    false            �            1259    24605    demo_manage    TABLE     �  CREATE TABLE public.demo_manage (
    client_id character varying NOT NULL,
    device_name character varying NOT NULL,
    device_mac_address character varying NOT NULL,
    device_firmware_version character varying NOT NULL,
    mqtt_client_name character varying NOT NULL,
    mqtt_host character varying NOT NULL,
    user_name character varying NOT NULL,
    password character varying NOT NULL,
    device_model character varying
);
    DROP TABLE public.demo_manage;
       public         heap    postgres    false            �          0    24605    demo_manage 
   TABLE DATA           �   COPY public.demo_manage (client_id, device_name, device_mac_address, device_firmware_version, mqtt_client_name, mqtt_host, user_name, password, device_model) FROM stdin;
    public          postgres    false    214          e           2606    24611    demo_manage demo_manage_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.demo_manage
    ADD CONSTRAINT demo_manage_pkey PRIMARY KEY (client_id);
 F   ALTER TABLE ONLY public.demo_manage DROP CONSTRAINT demo_manage_pkey;
       public            postgres    false    214            �   �   x�U�;1D��]�_��{�Xx�� ���㯳�o�ey�i��
D��+A�,��T��91Ѳn�r�\�c��ZZ.����'c�⁙Q�u���s�&`���ȯ�G��w��x�s
T��M����7�     
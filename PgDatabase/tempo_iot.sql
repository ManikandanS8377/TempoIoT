PGDMP         $    	            {         	   tempo_iot    15.2    15.2 D    >           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            @           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            A           1262    24836 	   tempo_iot    DATABASE     |   CREATE DATABASE tempo_iot WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_World.1252';
    DROP DATABASE tempo_iot;
                postgres    false            �            1255    24837    devicetrigger()    FUNCTION     �  CREATE FUNCTION public.devicetrigger() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
insert into device_management_log(device_id,device_name,device_model,device_mac_address,device_firmware_version,description,last_updated_by) values (NEW.device_id,NEW.device_name,NEW.device_model,NEW.device_mac_address,NEW.device_firmware_version,NEW.description,NEW.last_updated_by);
return new;
end;
$$;
 &   DROP FUNCTION public.devicetrigger();
       public          postgres    false            �            1255    24838    devicetrigger_del()    FUNCTION     �  CREATE FUNCTION public.devicetrigger_del() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
insert into device_management_log(device_id,device_name,device_model,device_mac_address,device_firmware_version,description,last_updated_by) values (NEW.device_id,NEW.device_name,NEW.device_model,NEW.device_mac_address,NEW.device_firmware_version,NEW.description,NEW.last_updated_by);
return new;
end;
$$;
 *   DROP FUNCTION public.devicetrigger_del();
       public          postgres    false            �            1259    24839    device_data_collection    TABLE     �   CREATE TABLE public.device_data_collection (
    r_no integer NOT NULL,
    device_id character varying(100),
    device_parameters character varying(100)
);
 *   DROP TABLE public.device_data_collection;
       public         heap    postgres    false            �            1259    24885     device_data_collection_device_id    SEQUENCE     �   CREATE SEQUENCE public.device_data_collection_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 7   DROP SEQUENCE public.device_data_collection_device_id;
       public          postgres    false    214            B           0    0     device_data_collection_device_id    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.device_data_collection_device_id OWNED BY public.device_data_collection.device_id;
          public          postgres    false    223            �            1259    24842    device_data_collection_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.device_data_collection_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.device_data_collection_r_no_seq;
       public          postgres    false    214            C           0    0    device_data_collection_r_no_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.device_data_collection_r_no_seq OWNED BY public.device_data_collection.r_no;
          public          postgres    false    215            �            1259    24843    device_management    TABLE       CREATE TABLE public.device_management (
    r_no integer NOT NULL,
    device_id character varying(45),
    device_model character varying(45),
    device_mac_address character varying(45),
    device_firmware_version character varying(45),
    description character varying(100),
    last_updated_by character varying(45),
    device_name character varying(45),
    last_updated_on timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    is_service_enabled character varying,
    device_status integer DEFAULT 1
);
 %   DROP TABLE public.device_management;
       public         heap    postgres    false            �            1259    24887    device_management_device_id    SEQUENCE     �   CREATE SEQUENCE public.device_management_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 2   DROP SEQUENCE public.device_management_device_id;
       public          postgres    false    216            D           0    0    device_management_device_id    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.device_management_device_id OWNED BY public.device_management.device_id;
          public          postgres    false    224            �            1259    24850    device_management_log    TABLE     �  CREATE TABLE public.device_management_log (
    device_id character varying(45),
    device_model character varying(45),
    device_mac_address character varying(45),
    device_firmware_version character varying(45),
    description character varying(100),
    last_updated_by character varying(45),
    device_name character varying,
    last_updated_on timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    r_no integer NOT NULL
);
 )   DROP TABLE public.device_management_log;
       public         heap    postgres    false            �            1259    24889    device_management_log_device_id    SEQUENCE     �   CREATE SEQUENCE public.device_management_log_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 6   DROP SEQUENCE public.device_management_log_device_id;
       public          postgres    false    217            E           0    0    device_management_log_device_id    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.device_management_log_device_id OWNED BY public.device_management_log.device_id;
          public          postgres    false    225            �            1259    24856    device_management_log_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.device_management_log_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.device_management_log_r_no_seq;
       public          postgres    false    217            F           0    0    device_management_log_r_no_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.device_management_log_r_no_seq OWNED BY public.device_management_log.r_no;
          public          postgres    false    218            �            1259    24857    device_management_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.device_management_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.device_management_r_no_seq;
       public          postgres    false    216            G           0    0    device_management_r_no_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.device_management_r_no_seq OWNED BY public.device_management.r_no;
          public          postgres    false    219            �            1259    24858    network_protocol    TABLE     �  CREATE TABLE public.network_protocol (
    r_no bigint NOT NULL,
    protocol_id character varying(45) NOT NULL,
    device_id character varying(45) NOT NULL,
    client_id character varying(45) NOT NULL,
    username character varying(45) NOT NULL,
    password character varying(45) NOT NULL,
    host character varying(45) NOT NULL,
    port character varying(45) NOT NULL,
    last_updated_by character varying(45) NOT NULL,
    last_updated_on time without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
 $   DROP TABLE public.network_protocol;
       public         heap    postgres    false            �            1259    24863    network_protocol_collection    TABLE     �   CREATE TABLE public.network_protocol_collection (
    r_no integer NOT NULL,
    protocol_id character varying(100),
    protocol_name character varying(200)
);
 /   DROP TABLE public.network_protocol_collection;
       public         heap    postgres    false            �            1259    24897 '   network_protocol_collection_protocol_id    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_collection_protocol_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 >   DROP SEQUENCE public.network_protocol_collection_protocol_id;
       public          postgres    false    221            H           0    0 '   network_protocol_collection_protocol_id    SEQUENCE OWNED BY     w   ALTER SEQUENCE public.network_protocol_collection_protocol_id OWNED BY public.network_protocol_collection.protocol_id;
          public          postgres    false    229            �            1259    24866 $   network_protocol_collection_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_collection_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public.network_protocol_collection_r_no_seq;
       public          postgres    false    221            I           0    0 $   network_protocol_collection_r_no_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public.network_protocol_collection_r_no_seq OWNED BY public.network_protocol_collection.r_no;
          public          postgres    false    222            �            1259    24893    network_protocol_device_id    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 1   DROP SEQUENCE public.network_protocol_device_id;
       public          postgres    false    220            J           0    0    network_protocol_device_id    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.network_protocol_device_id OWNED BY public.network_protocol.device_id;
          public          postgres    false    227            �            1259    24895    network_protocol_protocol_id    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_protocol_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 3   DROP SEQUENCE public.network_protocol_protocol_id;
       public          postgres    false    220            K           0    0    network_protocol_protocol_id    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.network_protocol_protocol_id OWNED BY public.network_protocol.protocol_id;
          public          postgres    false    228            �            1259    24891    network_protocol_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_r_no_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 0   DROP SEQUENCE public.network_protocol_r_no_seq;
       public          postgres    false    220            L           0    0    network_protocol_r_no_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.network_protocol_r_no_seq OWNED BY public.network_protocol.r_no;
          public          postgres    false    226            �           2604    24867    device_data_collection r_no    DEFAULT     �   ALTER TABLE ONLY public.device_data_collection ALTER COLUMN r_no SET DEFAULT nextval('public.device_data_collection_r_no_seq'::regclass);
 J   ALTER TABLE public.device_data_collection ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    215    214            �           2604    24886     device_data_collection device_id    DEFAULT     �   ALTER TABLE ONLY public.device_data_collection ALTER COLUMN device_id SET DEFAULT ('DI'::text || nextval('public.device_data_collection_device_id'::regclass));
 O   ALTER TABLE public.device_data_collection ALTER COLUMN device_id DROP DEFAULT;
       public          postgres    false    223    214            �           2604    24868    device_management r_no    DEFAULT     �   ALTER TABLE ONLY public.device_management ALTER COLUMN r_no SET DEFAULT nextval('public.device_management_r_no_seq'::regclass);
 E   ALTER TABLE public.device_management ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    219    216            �           2604    24888    device_management device_id    DEFAULT     �   ALTER TABLE ONLY public.device_management ALTER COLUMN device_id SET DEFAULT ('DI'::text || nextval('public.device_management_device_id'::regclass));
 J   ALTER TABLE public.device_management ALTER COLUMN device_id DROP DEFAULT;
       public          postgres    false    224    216            �           2604    24890    device_management_log device_id    DEFAULT     �   ALTER TABLE ONLY public.device_management_log ALTER COLUMN device_id SET DEFAULT ('DI'::text || nextval('public.device_management_log_device_id'::regclass));
 N   ALTER TABLE public.device_management_log ALTER COLUMN device_id DROP DEFAULT;
       public          postgres    false    225    217            �           2604    24869    device_management_log r_no    DEFAULT     �   ALTER TABLE ONLY public.device_management_log ALTER COLUMN r_no SET DEFAULT nextval('public.device_management_log_r_no_seq'::regclass);
 I   ALTER TABLE public.device_management_log ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    218    217            �           2604    24892    network_protocol r_no    DEFAULT     ~   ALTER TABLE ONLY public.network_protocol ALTER COLUMN r_no SET DEFAULT nextval('public.network_protocol_r_no_seq'::regclass);
 D   ALTER TABLE public.network_protocol ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    226    220            �           2604    24896    network_protocol protocol_id    DEFAULT     �   ALTER TABLE ONLY public.network_protocol ALTER COLUMN protocol_id SET DEFAULT ('PI'::text || nextval('public.network_protocol_protocol_id'::regclass));
 K   ALTER TABLE public.network_protocol ALTER COLUMN protocol_id DROP DEFAULT;
       public          postgres    false    228    220            �           2604    24894    network_protocol device_id    DEFAULT     �   ALTER TABLE ONLY public.network_protocol ALTER COLUMN device_id SET DEFAULT ('DI'::text || nextval('public.network_protocol_device_id'::regclass));
 I   ALTER TABLE public.network_protocol ALTER COLUMN device_id DROP DEFAULT;
       public          postgres    false    227    220            �           2604    24870     network_protocol_collection r_no    DEFAULT     �   ALTER TABLE ONLY public.network_protocol_collection ALTER COLUMN r_no SET DEFAULT nextval('public.network_protocol_collection_r_no_seq'::regclass);
 O   ALTER TABLE public.network_protocol_collection ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    222    221            �           2604    24898 '   network_protocol_collection protocol_id    DEFAULT     �   ALTER TABLE ONLY public.network_protocol_collection ALTER COLUMN protocol_id SET DEFAULT ('PI'::text || nextval('public.network_protocol_collection_protocol_id'::regclass));
 V   ALTER TABLE public.network_protocol_collection ALTER COLUMN protocol_id DROP DEFAULT;
       public          postgres    false    229    221            ,          0    24839    device_data_collection 
   TABLE DATA           T   COPY public.device_data_collection (r_no, device_id, device_parameters) FROM stdin;
    public          postgres    false    214   �Y       .          0    24843    device_management 
   TABLE DATA           �   COPY public.device_management (r_no, device_id, device_model, device_mac_address, device_firmware_version, description, last_updated_by, device_name, last_updated_on, is_service_enabled, device_status) FROM stdin;
    public          postgres    false    216   "Z       /          0    24850    device_management_log 
   TABLE DATA           �   COPY public.device_management_log (device_id, device_model, device_mac_address, device_firmware_version, description, last_updated_by, device_name, last_updated_on, r_no) FROM stdin;
    public          postgres    false    217   �Z       2          0    24858    network_protocol 
   TABLE DATA           �   COPY public.network_protocol (r_no, protocol_id, device_id, client_id, username, password, host, port, last_updated_by, last_updated_on) FROM stdin;
    public          postgres    false    220   &\       3          0    24863    network_protocol_collection 
   TABLE DATA           W   COPY public.network_protocol_collection (r_no, protocol_id, protocol_name) FROM stdin;
    public          postgres    false    221   C\       M           0    0     device_data_collection_device_id    SEQUENCE SET     O   SELECT pg_catalog.setval('public.device_data_collection_device_id', 1, false);
          public          postgres    false    223            N           0    0    device_data_collection_r_no_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.device_data_collection_r_no_seq', 1, true);
          public          postgres    false    215            O           0    0    device_management_device_id    SEQUENCE SET     J   SELECT pg_catalog.setval('public.device_management_device_id', 1, false);
          public          postgres    false    224            P           0    0    device_management_log_device_id    SEQUENCE SET     N   SELECT pg_catalog.setval('public.device_management_log_device_id', 1, false);
          public          postgres    false    225            Q           0    0    device_management_log_r_no_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.device_management_log_r_no_seq', 12, true);
          public          postgres    false    218            R           0    0    device_management_r_no_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.device_management_r_no_seq', 10, true);
          public          postgres    false    219            S           0    0 '   network_protocol_collection_protocol_id    SEQUENCE SET     V   SELECT pg_catalog.setval('public.network_protocol_collection_protocol_id', 1, false);
          public          postgres    false    229            T           0    0 $   network_protocol_collection_r_no_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public.network_protocol_collection_r_no_seq', 1, false);
          public          postgres    false    222            U           0    0    network_protocol_device_id    SEQUENCE SET     I   SELECT pg_catalog.setval('public.network_protocol_device_id', 1, false);
          public          postgres    false    227            V           0    0    network_protocol_protocol_id    SEQUENCE SET     K   SELECT pg_catalog.setval('public.network_protocol_protocol_id', 1, false);
          public          postgres    false    228            W           0    0    network_protocol_r_no_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.network_protocol_r_no_seq', 1, false);
          public          postgres    false    226            �           2606    24872 2   device_data_collection device_data_collection_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.device_data_collection
    ADD CONSTRAINT device_data_collection_pkey PRIMARY KEY (r_no);
 \   ALTER TABLE ONLY public.device_data_collection DROP CONSTRAINT device_data_collection_pkey;
       public            postgres    false    214            �           2606    24874    network_protocol device_id_ukey 
   CONSTRAINT     _   ALTER TABLE ONLY public.network_protocol
    ADD CONSTRAINT device_id_ukey UNIQUE (device_id);
 I   ALTER TABLE ONLY public.network_protocol DROP CONSTRAINT device_id_ukey;
       public            postgres    false    220            �           2606    24876 0   device_management_log device_management_log_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.device_management_log
    ADD CONSTRAINT device_management_log_pkey PRIMARY KEY (r_no);
 Z   ALTER TABLE ONLY public.device_management_log DROP CONSTRAINT device_management_log_pkey;
       public            postgres    false    217            �           2606    24878 (   device_management device_management_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.device_management
    ADD CONSTRAINT device_management_pkey PRIMARY KEY (r_no);
 R   ALTER TABLE ONLY public.device_management DROP CONSTRAINT device_management_pkey;
       public            postgres    false    216            �           2606    24880 <   network_protocol_collection network_protocol_collection_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public.network_protocol_collection
    ADD CONSTRAINT network_protocol_collection_pkey PRIMARY KEY (r_no);
 f   ALTER TABLE ONLY public.network_protocol_collection DROP CONSTRAINT network_protocol_collection_pkey;
       public            postgres    false    221            �           2606    24882 &   network_protocol network_protocol_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.network_protocol
    ADD CONSTRAINT network_protocol_pkey PRIMARY KEY (r_no);
 P   ALTER TABLE ONLY public.network_protocol DROP CONSTRAINT network_protocol_pkey;
       public            postgres    false    220            �           2620    24883 '   device_management device_management_trg    TRIGGER     �   CREATE TRIGGER device_management_trg AFTER INSERT ON public.device_management FOR EACH ROW EXECUTE FUNCTION public.devicetrigger();
 @   DROP TRIGGER device_management_trg ON public.device_management;
       public          postgres    false    216    230            �           2620    24884 +   device_management device_management_trg_del    TRIGGER     �   CREATE TRIGGER device_management_trg_del AFTER UPDATE ON public.device_management FOR EACH ROW EXECUTE FUNCTION public.devicetrigger_del();
 D   DROP TRIGGER device_management_trg_del ON public.device_management;
       public          postgres    false    216    231            ,      x�3���,,OU+j`Vy*W� yI�      .   �   x���Qj�0 �o��@�$[��C��1,�B�BI�}��-��Wf��x��~��]�Y�zg��`l�N��0��-��-��5�T�T�'0����q�K�V	W0Up;�Q	^��JE���;Z��'d�XA��k�}*3O��No�O$9ƌ��P��#�.�������f������Ŕ�e6o�I�۽rg�{����      /     x���Qj�0�g��@�$˲�C�}	k ����m�һ�Y�քP��,�|���k]�����ױ~X�5#�=ʞiG!!&��E�)��qa�֖A����gKP	�<�A���Dh���Y�u��-r�-lUB1�����iJ+H��Dc3��1x��s1��*2�@0]������r�������G갑��R�r,�@1�:U��K�[�Ôvu�}Im��E����n6R��Y*8J"��z���r�Z(��|��2|�<g�~�?K1q��1���9Zc�Ot�      2      x������ � �      3      x������ � �     
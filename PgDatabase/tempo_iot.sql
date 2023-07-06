PGDMP     %                    {         	   tempo_iot    15.2    15.2 L    S           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            T           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            U           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            V           1262    33074 	   tempo_iot    DATABASE     |   CREATE DATABASE tempo_iot WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
    DROP DATABASE tempo_iot;
                postgres    false            �            1255    33075    devicetrigger()    FUNCTION     �  CREATE FUNCTION public.devicetrigger() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
insert into device_management_log(device_id,device_name,device_model,device_mac_address,device_firmware_version,description,last_updated_by) values (NEW.device_id,NEW.device_name,NEW.device_model,NEW.device_mac_address,NEW.device_firmware_version,NEW.description,NEW.last_updated_by);
return new;
end;
$$;
 &   DROP FUNCTION public.devicetrigger();
       public          postgres    false            �            1255    33076    devicetrigger_del()    FUNCTION     �  CREATE FUNCTION public.devicetrigger_del() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
insert into device_management_log(device_id,device_name,device_model,device_mac_address,device_firmware_version,description,last_updated_by) values (NEW.device_id,NEW.device_name,NEW.device_model,NEW.device_mac_address,NEW.device_firmware_version,NEW.description,NEW.last_updated_by);
return new;
end;
$$;
 *   DROP FUNCTION public.devicetrigger_del();
       public          postgres    false            �            1255    41332    site_insert_trg()    FUNCTION     �  CREATE FUNCTION public.site_insert_trg() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
insert into site_management_log(company_name, site_name, site_admin_email, site_location, site_address, site_admin_name, new_site_admin_name, industry)
	values(new.company_name,new.site_name, new.site_admin_email, new.site_location, new.site_address, new.site_admin_name, new.new_site_admin_name, new.industry);
	return new;
	end;
	$$;
 (   DROP FUNCTION public.site_insert_trg();
       public          postgres    false            �            1259    33077    device_data_collection    TABLE     �   CREATE TABLE public.device_data_collection (
    r_no integer NOT NULL,
    device_id character varying(100),
    device_parameters character varying(100)
);
 *   DROP TABLE public.device_data_collection;
       public         heap    postgres    false            �            1259    33080     device_data_collection_device_id    SEQUENCE     �   CREATE SEQUENCE public.device_data_collection_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 7   DROP SEQUENCE public.device_data_collection_device_id;
       public          postgres    false    214            W           0    0     device_data_collection_device_id    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.device_data_collection_device_id OWNED BY public.device_data_collection.device_id;
          public          postgres    false    215            �            1259    33081    device_data_collection_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.device_data_collection_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.device_data_collection_r_no_seq;
       public          postgres    false    214            X           0    0    device_data_collection_r_no_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.device_data_collection_r_no_seq OWNED BY public.device_data_collection.r_no;
          public          postgres    false    216            �            1259    33082    device_management    TABLE       CREATE TABLE public.device_management (
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
       public         heap    postgres    false            �            1259    33089    device_management_device_id    SEQUENCE     �   CREATE SEQUENCE public.device_management_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 2   DROP SEQUENCE public.device_management_device_id;
       public          postgres    false    217            Y           0    0    device_management_device_id    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.device_management_device_id OWNED BY public.device_management.device_id;
          public          postgres    false    218            �            1259    33090    device_management_log    TABLE     �  CREATE TABLE public.device_management_log (
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
       public         heap    postgres    false            �            1259    33096    device_management_log_device_id    SEQUENCE     �   CREATE SEQUENCE public.device_management_log_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 6   DROP SEQUENCE public.device_management_log_device_id;
       public          postgres    false    219            Z           0    0    device_management_log_device_id    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.device_management_log_device_id OWNED BY public.device_management_log.device_id;
          public          postgres    false    220            �            1259    33097    device_management_log_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.device_management_log_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.device_management_log_r_no_seq;
       public          postgres    false    219            [           0    0    device_management_log_r_no_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.device_management_log_r_no_seq OWNED BY public.device_management_log.r_no;
          public          postgres    false    221            �            1259    33098    device_management_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.device_management_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.device_management_r_no_seq;
       public          postgres    false    217            \           0    0    device_management_r_no_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.device_management_r_no_seq OWNED BY public.device_management.r_no;
          public          postgres    false    222            �            1259    33099    network_protocol    TABLE     �  CREATE TABLE public.network_protocol (
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
       public         heap    postgres    false            �            1259    33103    network_protocol_collection    TABLE     �   CREATE TABLE public.network_protocol_collection (
    r_no integer NOT NULL,
    protocol_id character varying(100),
    protocol_name character varying(200)
);
 /   DROP TABLE public.network_protocol_collection;
       public         heap    postgres    false            �            1259    33106 '   network_protocol_collection_protocol_id    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_collection_protocol_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 >   DROP SEQUENCE public.network_protocol_collection_protocol_id;
       public          postgres    false    224            ]           0    0 '   network_protocol_collection_protocol_id    SEQUENCE OWNED BY     w   ALTER SEQUENCE public.network_protocol_collection_protocol_id OWNED BY public.network_protocol_collection.protocol_id;
          public          postgres    false    225            �            1259    33107 $   network_protocol_collection_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_collection_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public.network_protocol_collection_r_no_seq;
       public          postgres    false    224            ^           0    0 $   network_protocol_collection_r_no_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public.network_protocol_collection_r_no_seq OWNED BY public.network_protocol_collection.r_no;
          public          postgres    false    226            �            1259    33108    network_protocol_device_id    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 1   DROP SEQUENCE public.network_protocol_device_id;
       public          postgres    false    223            _           0    0    network_protocol_device_id    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.network_protocol_device_id OWNED BY public.network_protocol.device_id;
          public          postgres    false    227            �            1259    33109    network_protocol_protocol_id    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_protocol_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 3   DROP SEQUENCE public.network_protocol_protocol_id;
       public          postgres    false    223            `           0    0    network_protocol_protocol_id    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.network_protocol_protocol_id OWNED BY public.network_protocol.protocol_id;
          public          postgres    false    228            �            1259    33110    network_protocol_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_r_no_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 0   DROP SEQUENCE public.network_protocol_r_no_seq;
       public          postgres    false    223            a           0    0    network_protocol_r_no_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.network_protocol_r_no_seq OWNED BY public.network_protocol.r_no;
          public          postgres    false    229            �            1259    33136    site_management    TABLE     @  CREATE TABLE public.site_management (
    r_no integer DEFAULT nextval('public.device_management_r_no_seq'::regclass) NOT NULL,
    company_name character varying,
    site_name character varying,
    site_admin_email character varying,
    site_location character varying,
    site_address character varying,
    site_admin_name character varying,
    new_site_admin_name character varying,
    industry character varying,
    site_id character varying,
    site_status integer DEFAULT 1,
    site_created_on timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);
 #   DROP TABLE public.site_management;
       public         heap    postgres    false    222            �            1259    41268    site_management_log    TABLE     ^  CREATE TABLE public.site_management_log (
    r_no integer DEFAULT nextval('public.device_management_r_no_seq'::regclass) NOT NULL,
    company_name character varying(100),
    site_name character varying(100),
    site_admin_email character varying(100),
    site_location character varying(100),
    site_address character varying(100),
    site_admin_name character varying(100),
    new_site_admin_name character varying(100),
    industry character varying(100),
    site_id character varying(100),
    site_status integer,
    site_created_on timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 '   DROP TABLE public.site_management_log;
       public         heap    postgres    false    222            �           2604    33111    device_data_collection r_no    DEFAULT     �   ALTER TABLE ONLY public.device_data_collection ALTER COLUMN r_no SET DEFAULT nextval('public.device_data_collection_r_no_seq'::regclass);
 J   ALTER TABLE public.device_data_collection ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    216    214            �           2604    33112     device_data_collection device_id    DEFAULT     �   ALTER TABLE ONLY public.device_data_collection ALTER COLUMN device_id SET DEFAULT ('DI'::text || nextval('public.device_data_collection_device_id'::regclass));
 O   ALTER TABLE public.device_data_collection ALTER COLUMN device_id DROP DEFAULT;
       public          postgres    false    215    214            �           2604    33113    device_management r_no    DEFAULT     �   ALTER TABLE ONLY public.device_management ALTER COLUMN r_no SET DEFAULT nextval('public.device_management_r_no_seq'::regclass);
 E   ALTER TABLE public.device_management ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    222    217            �           2604    33114    device_management device_id    DEFAULT     �   ALTER TABLE ONLY public.device_management ALTER COLUMN device_id SET DEFAULT ('DI'::text || nextval('public.device_management_device_id'::regclass));
 J   ALTER TABLE public.device_management ALTER COLUMN device_id DROP DEFAULT;
       public          postgres    false    218    217            �           2604    33115    device_management_log device_id    DEFAULT     �   ALTER TABLE ONLY public.device_management_log ALTER COLUMN device_id SET DEFAULT ('DI'::text || nextval('public.device_management_log_device_id'::regclass));
 N   ALTER TABLE public.device_management_log ALTER COLUMN device_id DROP DEFAULT;
       public          postgres    false    220    219            �           2604    33116    device_management_log r_no    DEFAULT     �   ALTER TABLE ONLY public.device_management_log ALTER COLUMN r_no SET DEFAULT nextval('public.device_management_log_r_no_seq'::regclass);
 I   ALTER TABLE public.device_management_log ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    221    219            �           2604    33117    network_protocol r_no    DEFAULT     ~   ALTER TABLE ONLY public.network_protocol ALTER COLUMN r_no SET DEFAULT nextval('public.network_protocol_r_no_seq'::regclass);
 D   ALTER TABLE public.network_protocol ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    229    223            �           2604    33118    network_protocol protocol_id    DEFAULT     �   ALTER TABLE ONLY public.network_protocol ALTER COLUMN protocol_id SET DEFAULT ('PI'::text || nextval('public.network_protocol_protocol_id'::regclass));
 K   ALTER TABLE public.network_protocol ALTER COLUMN protocol_id DROP DEFAULT;
       public          postgres    false    228    223            �           2604    33119    network_protocol device_id    DEFAULT     �   ALTER TABLE ONLY public.network_protocol ALTER COLUMN device_id SET DEFAULT ('DI'::text || nextval('public.network_protocol_device_id'::regclass));
 I   ALTER TABLE public.network_protocol ALTER COLUMN device_id DROP DEFAULT;
       public          postgres    false    227    223            �           2604    33120     network_protocol_collection r_no    DEFAULT     �   ALTER TABLE ONLY public.network_protocol_collection ALTER COLUMN r_no SET DEFAULT nextval('public.network_protocol_collection_r_no_seq'::regclass);
 O   ALTER TABLE public.network_protocol_collection ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    226    224            �           2604    33121 '   network_protocol_collection protocol_id    DEFAULT     �   ALTER TABLE ONLY public.network_protocol_collection ALTER COLUMN protocol_id SET DEFAULT ('PI'::text || nextval('public.network_protocol_collection_protocol_id'::regclass));
 V   ALTER TABLE public.network_protocol_collection ALTER COLUMN protocol_id DROP DEFAULT;
       public          postgres    false    225    224            ?          0    33077    device_data_collection 
   TABLE DATA           T   COPY public.device_data_collection (r_no, device_id, device_parameters) FROM stdin;
    public          postgres    false    214   wi       B          0    33082    device_management 
   TABLE DATA           �   COPY public.device_management (r_no, device_id, device_model, device_mac_address, device_firmware_version, description, last_updated_by, device_name, last_updated_on, is_service_enabled, device_status) FROM stdin;
    public          postgres    false    217   �i       D          0    33090    device_management_log 
   TABLE DATA           �   COPY public.device_management_log (device_id, device_model, device_mac_address, device_firmware_version, description, last_updated_by, device_name, last_updated_on, r_no) FROM stdin;
    public          postgres    false    219   �j       H          0    33099    network_protocol 
   TABLE DATA           �   COPY public.network_protocol (r_no, protocol_id, device_id, client_id, username, password, host, port, last_updated_by, last_updated_on) FROM stdin;
    public          postgres    false    223   ~l       I          0    33103    network_protocol_collection 
   TABLE DATA           W   COPY public.network_protocol_collection (r_no, protocol_id, protocol_name) FROM stdin;
    public          postgres    false    224   �l       O          0    33136    site_management 
   TABLE DATA           �   COPY public.site_management (r_no, company_name, site_name, site_admin_email, site_location, site_address, site_admin_name, new_site_admin_name, industry, site_id, site_status, site_created_on) FROM stdin;
    public          postgres    false    230   �l       P          0    41268    site_management_log 
   TABLE DATA           �   COPY public.site_management_log (r_no, company_name, site_name, site_admin_email, site_location, site_address, site_admin_name, new_site_admin_name, industry, site_id, site_status, site_created_on) FROM stdin;
    public          postgres    false    231   ^n       b           0    0     device_data_collection_device_id    SEQUENCE SET     O   SELECT pg_catalog.setval('public.device_data_collection_device_id', 1, false);
          public          postgres    false    215            c           0    0    device_data_collection_r_no_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.device_data_collection_r_no_seq', 1, true);
          public          postgres    false    216            d           0    0    device_management_device_id    SEQUENCE SET     J   SELECT pg_catalog.setval('public.device_management_device_id', 1, false);
          public          postgres    false    218            e           0    0    device_management_log_device_id    SEQUENCE SET     N   SELECT pg_catalog.setval('public.device_management_log_device_id', 1, false);
          public          postgres    false    220            f           0    0    device_management_log_r_no_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.device_management_log_r_no_seq', 30, true);
          public          postgres    false    221            g           0    0    device_management_r_no_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.device_management_r_no_seq', 30, true);
          public          postgres    false    222            h           0    0 '   network_protocol_collection_protocol_id    SEQUENCE SET     V   SELECT pg_catalog.setval('public.network_protocol_collection_protocol_id', 1, false);
          public          postgres    false    225            i           0    0 $   network_protocol_collection_r_no_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public.network_protocol_collection_r_no_seq', 1, false);
          public          postgres    false    226            j           0    0    network_protocol_device_id    SEQUENCE SET     I   SELECT pg_catalog.setval('public.network_protocol_device_id', 1, false);
          public          postgres    false    227            k           0    0    network_protocol_protocol_id    SEQUENCE SET     K   SELECT pg_catalog.setval('public.network_protocol_protocol_id', 1, false);
          public          postgres    false    228            l           0    0    network_protocol_r_no_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.network_protocol_r_no_seq', 1, false);
          public          postgres    false    229            �           2606    33123 2   device_data_collection device_data_collection_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.device_data_collection
    ADD CONSTRAINT device_data_collection_pkey PRIMARY KEY (r_no);
 \   ALTER TABLE ONLY public.device_data_collection DROP CONSTRAINT device_data_collection_pkey;
       public            postgres    false    214            �           2606    33125    network_protocol device_id_ukey 
   CONSTRAINT     _   ALTER TABLE ONLY public.network_protocol
    ADD CONSTRAINT device_id_ukey UNIQUE (device_id);
 I   ALTER TABLE ONLY public.network_protocol DROP CONSTRAINT device_id_ukey;
       public            postgres    false    223            �           2606    33127 0   device_management_log device_management_log_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.device_management_log
    ADD CONSTRAINT device_management_log_pkey PRIMARY KEY (r_no);
 Z   ALTER TABLE ONLY public.device_management_log DROP CONSTRAINT device_management_log_pkey;
       public            postgres    false    219            �           2606    33129 (   device_management device_management_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.device_management
    ADD CONSTRAINT device_management_pkey PRIMARY KEY (r_no);
 R   ALTER TABLE ONLY public.device_management DROP CONSTRAINT device_management_pkey;
       public            postgres    false    217            �           2606    33131 <   network_protocol_collection network_protocol_collection_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public.network_protocol_collection
    ADD CONSTRAINT network_protocol_collection_pkey PRIMARY KEY (r_no);
 f   ALTER TABLE ONLY public.network_protocol_collection DROP CONSTRAINT network_protocol_collection_pkey;
       public            postgres    false    224            �           2606    33133 &   network_protocol network_protocol_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.network_protocol
    ADD CONSTRAINT network_protocol_pkey PRIMARY KEY (r_no);
 P   ALTER TABLE ONLY public.network_protocol DROP CONSTRAINT network_protocol_pkey;
       public            postgres    false    223            �           2606    41274 ,   site_management_log site_management_log_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.site_management_log
    ADD CONSTRAINT site_management_log_pkey PRIMARY KEY (r_no);
 V   ALTER TABLE ONLY public.site_management_log DROP CONSTRAINT site_management_log_pkey;
       public            postgres    false    231            �           2606    33143 $   site_management site_management_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.site_management
    ADD CONSTRAINT site_management_pkey PRIMARY KEY (r_no);
 N   ALTER TABLE ONLY public.site_management DROP CONSTRAINT site_management_pkey;
       public            postgres    false    230            �           2620    33134 '   device_management device_management_trg    TRIGGER     �   CREATE TRIGGER device_management_trg AFTER INSERT ON public.device_management FOR EACH ROW EXECUTE FUNCTION public.devicetrigger();
 @   DROP TRIGGER device_management_trg ON public.device_management;
       public          postgres    false    232    217            �           2620    33135 +   device_management device_management_trg_del    TRIGGER     �   CREATE TRIGGER device_management_trg_del AFTER UPDATE ON public.device_management FOR EACH ROW EXECUTE FUNCTION public.devicetrigger_del();
 D   DROP TRIGGER device_management_trg_del ON public.device_management;
       public          postgres    false    217    233            �           2620    41333 #   site_management site_management_log    TRIGGER     �   CREATE TRIGGER site_management_log AFTER INSERT ON public.site_management FOR EACH ROW EXECUTE FUNCTION public.site_insert_trg();
 <   DROP TRIGGER site_management_log ON public.site_management;
       public          postgres    false    234    230            ?      x�3���,,OU+j`Vy*W� yI�      B   �   x���A��0E��)z�I�mŇ�	�14�@�BI)��8�R�2�i��#d�>_���^�ۃ����X��F`dנ4L��B��F�=�R&�!w5��d"ـd�q��� &������$�PmT����������+�?"�8>*8$t\y��=g5�ۍ��p��q>��	rn��K=�>��KI4�ZuL^a�\���h�1?&0��      D   �  x���[j�@E�[��\Ի��
��L6�	�C�ާ;ۘ�$�JW�oU�m3�v/�8��۱�����_3�,Q�L�����x���M���m���oXԌ�<�S��a_7��!KF�I�;��/�nt_�2TwBO:<���^��(o�A�P8�	5�8�j�-�|\iV���4�a�>l���F�"cl��Q�T��U'�#)�\j�TO������1m~�C!1q:��{�ZSmX 4�D8���Ͷ�M�rђ���z,���iܥ�zy}%1��!�+���Ҹ@&���]Ԥ64P�3�T�2{�"�J�8��{��30b1Jd�~}�"c�5WN�3�R1�h$�s���+�p��rK�>��l,�jW]�D���<�&$9R�4�� �dV���g?�*���'�;�gQ#��5�M}C���
�aXo���8�M�X$��^]gV7$�sw$>a��*�c��;�g�C)Ub���+Lpr�t�cɤՓD�a�����      H      x������ � �      I      x������ � �      O   �  x��SKn�0]ۧ��<�_�U��p6V� �6	Dܾ6	PB��Z�g���XRnc�{y��w%mAP�\�@� �V^.��9�n�G�9�j���C�X�P�]��aw<��ʨu�m�1�"H��xe�(�rFhIQ@�����VA9g=/4G���a��@1�����m�q��>�#�	����2A�ZGA��c��PWeK���w�w7g��ڰ�q��c�t�t)_��:	����O�N�
RǞ%�����Hbea�nbے|�H3\��}=���z#�]QT��7�n�"څ�RF�׎���I
���^S?ʁN�2���2;��9c]���vΫ�+���s�UA��t�C�������/�4(WB9�n|5��\�W�jPHW�R���.B      P   q   x���1
�@��W�>t�݋o��3�&錛�>$)���� $аʴܦG����m����ǥG�rg�&o��A��'���s����S�xd$c�5-�o���-��ҳQǤ�/QN6�     
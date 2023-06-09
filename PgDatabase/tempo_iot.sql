PGDMP     0        
            {         	   tempo_iot    15.2    15.2 P    V           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            W           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            X           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            Y           1262    16734 	   tempo_iot    DATABASE     |   CREATE DATABASE tempo_iot WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
    DROP DATABASE tempo_iot;
                postgres    false            �            1255    16735    devicetrigger()    FUNCTION     �  CREATE FUNCTION public.devicetrigger() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
insert into device_management_log(device_id,device_name,device_model,device_mac_address,device_firmware_version,description,last_updated_by) values (NEW.device_id,NEW.device_name,NEW.device_model,NEW.device_mac_address,NEW.device_firmware_version,NEW.description,NEW.last_updated_by);
return new;
end;
$$;
 &   DROP FUNCTION public.devicetrigger();
       public          postgres    false            �            1255    16736    devicetrigger_del()    FUNCTION     �  CREATE FUNCTION public.devicetrigger_del() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
insert into device_management_log(device_id,device_name,device_model,device_mac_address,device_firmware_version,description,last_updated_by) values (NEW.device_id,NEW.device_name,NEW.device_model,NEW.device_mac_address,NEW.device_firmware_version,NEW.description,NEW.last_updated_by);
return new;
end;
$$;
 *   DROP FUNCTION public.devicetrigger_del();
       public          postgres    false            �            1255    16737 "   notify_device_management_changes()    FUNCTION     �   CREATE FUNCTION public.notify_device_management_changes() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  PERFORM pg_notify('table_changes', row_to_json(NEW)::text);
  RETURN NEW;
END;
$$;
 9   DROP FUNCTION public.notify_device_management_changes();
       public          postgres    false            �            1255    16738    site_insert_trg()    FUNCTION     �  CREATE FUNCTION public.site_insert_trg() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
insert into site_management_log(company_name, site_name, site_admin_email, site_location, site_address, site_admin_name, new_site_admin_name, industry)
	values(new.company_name,new.site_name, new.site_admin_email, new.site_location, new.site_address, new.site_admin_name, new.new_site_admin_name, new.industry);
	return new;
	end;
	$$;
 (   DROP FUNCTION public.site_insert_trg();
       public          postgres    false            �            1259    16739    device_data_collection    TABLE     �   CREATE TABLE public.device_data_collection (
    r_no integer NOT NULL,
    device_id character varying(100),
    device_parameters character varying(100)
);
 *   DROP TABLE public.device_data_collection;
       public         heap    postgres    false            �            1259    16742     device_data_collection_device_id    SEQUENCE     �   CREATE SEQUENCE public.device_data_collection_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 7   DROP SEQUENCE public.device_data_collection_device_id;
       public          postgres    false    214            Z           0    0     device_data_collection_device_id    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.device_data_collection_device_id OWNED BY public.device_data_collection.device_id;
          public          postgres    false    215            �            1259    16743    device_data_collection_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.device_data_collection_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.device_data_collection_r_no_seq;
       public          postgres    false    214            [           0    0    device_data_collection_r_no_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.device_data_collection_r_no_seq OWNED BY public.device_data_collection.r_no;
          public          postgres    false    216            �            1259    16744    device_management    TABLE       CREATE TABLE public.device_management (
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
       public         heap    postgres    false            �            1259    16751    device_management_device_id    SEQUENCE     �   CREATE SEQUENCE public.device_management_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 2   DROP SEQUENCE public.device_management_device_id;
       public          postgres    false    217            \           0    0    device_management_device_id    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.device_management_device_id OWNED BY public.device_management.device_id;
          public          postgres    false    218            �            1259    16752    device_management_log    TABLE     �  CREATE TABLE public.device_management_log (
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
       public         heap    postgres    false            �            1259    16758    device_management_log_device_id    SEQUENCE     �   CREATE SEQUENCE public.device_management_log_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 6   DROP SEQUENCE public.device_management_log_device_id;
       public          postgres    false    219            ]           0    0    device_management_log_device_id    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.device_management_log_device_id OWNED BY public.device_management_log.device_id;
          public          postgres    false    220            �            1259    16759    device_management_log_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.device_management_log_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.device_management_log_r_no_seq;
       public          postgres    false    219            ^           0    0    device_management_log_r_no_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.device_management_log_r_no_seq OWNED BY public.device_management_log.r_no;
          public          postgres    false    221            �            1259    16760    device_management_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.device_management_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.device_management_r_no_seq;
       public          postgres    false    217            _           0    0    device_management_r_no_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.device_management_r_no_seq OWNED BY public.device_management.r_no;
          public          postgres    false    222            �            1259    16761    network_protocol    TABLE     �  CREATE TABLE public.network_protocol (
    r_no bigint NOT NULL,
    protocol_id character varying(45) NOT NULL,
    device_id character varying(45),
    client_id character varying(45),
    username character varying(45),
    password character varying(45),
    host character varying(45),
    port character varying(45),
    last_updated_by character varying(45),
    last_updated_on time without time zone DEFAULT CURRENT_TIMESTAMP
);
 $   DROP TABLE public.network_protocol;
       public         heap    postgres    false            �            1259    16765    network_protocol_collection    TABLE     �   CREATE TABLE public.network_protocol_collection (
    r_no integer NOT NULL,
    protocol_id character varying(100),
    protocol_name character varying(200)
);
 /   DROP TABLE public.network_protocol_collection;
       public         heap    postgres    false            �            1259    16768 '   network_protocol_collection_protocol_id    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_collection_protocol_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 >   DROP SEQUENCE public.network_protocol_collection_protocol_id;
       public          postgres    false    224            `           0    0 '   network_protocol_collection_protocol_id    SEQUENCE OWNED BY     w   ALTER SEQUENCE public.network_protocol_collection_protocol_id OWNED BY public.network_protocol_collection.protocol_id;
          public          postgres    false    225            �            1259    16769 $   network_protocol_collection_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_collection_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public.network_protocol_collection_r_no_seq;
       public          postgres    false    224            a           0    0 $   network_protocol_collection_r_no_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public.network_protocol_collection_r_no_seq OWNED BY public.network_protocol_collection.r_no;
          public          postgres    false    226            �            1259    16770    network_protocol_device_id    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 1   DROP SEQUENCE public.network_protocol_device_id;
       public          postgres    false    223            b           0    0    network_protocol_device_id    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.network_protocol_device_id OWNED BY public.network_protocol.device_id;
          public          postgres    false    227            �            1259    16771    network_protocol_protocol_id    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_protocol_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 3   DROP SEQUENCE public.network_protocol_protocol_id;
       public          postgres    false    223            c           0    0    network_protocol_protocol_id    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.network_protocol_protocol_id OWNED BY public.network_protocol.protocol_id;
          public          postgres    false    228            �            1259    16772    network_protocol_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_r_no_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 0   DROP SEQUENCE public.network_protocol_r_no_seq;
       public          postgres    false    223            d           0    0    network_protocol_r_no_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.network_protocol_r_no_seq OWNED BY public.network_protocol.r_no;
          public          postgres    false    229            �            1259    16773    site_management    TABLE     @  CREATE TABLE public.site_management (
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
       public         heap    postgres    false    222            �            1259    16781    site_management_log    TABLE     ^  CREATE TABLE public.site_management_log (
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
       public         heap    postgres    false    222            �            1259    16788    site_management_site_id    SEQUENCE     �   CREATE SEQUENCE public.site_management_site_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 .   DROP SEQUENCE public.site_management_site_id;
       public          postgres    false    230            e           0    0    site_management_site_id    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.site_management_site_id OWNED BY public.site_management.site_id;
          public          postgres    false    232            �           2604    16789    device_data_collection r_no    DEFAULT     �   ALTER TABLE ONLY public.device_data_collection ALTER COLUMN r_no SET DEFAULT nextval('public.device_data_collection_r_no_seq'::regclass);
 J   ALTER TABLE public.device_data_collection ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    216    214            �           2604    16790    device_management r_no    DEFAULT     �   ALTER TABLE ONLY public.device_management ALTER COLUMN r_no SET DEFAULT nextval('public.device_management_r_no_seq'::regclass);
 E   ALTER TABLE public.device_management ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    222    217            �           2604    16791    device_management device_id    DEFAULT     �   ALTER TABLE ONLY public.device_management ALTER COLUMN device_id SET DEFAULT ('DI'::text || nextval('public.device_management_device_id'::regclass));
 J   ALTER TABLE public.device_management ALTER COLUMN device_id DROP DEFAULT;
       public          postgres    false    218    217            �           2604    16792    device_management_log device_id    DEFAULT     �   ALTER TABLE ONLY public.device_management_log ALTER COLUMN device_id SET DEFAULT ('DI'::text || nextval('public.device_management_log_device_id'::regclass));
 N   ALTER TABLE public.device_management_log ALTER COLUMN device_id DROP DEFAULT;
       public          postgres    false    220    219            �           2604    16793    device_management_log r_no    DEFAULT     �   ALTER TABLE ONLY public.device_management_log ALTER COLUMN r_no SET DEFAULT nextval('public.device_management_log_r_no_seq'::regclass);
 I   ALTER TABLE public.device_management_log ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    221    219            �           2604    16794    network_protocol r_no    DEFAULT     ~   ALTER TABLE ONLY public.network_protocol ALTER COLUMN r_no SET DEFAULT nextval('public.network_protocol_r_no_seq'::regclass);
 D   ALTER TABLE public.network_protocol ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    229    223            �           2604    16795    network_protocol protocol_id    DEFAULT     �   ALTER TABLE ONLY public.network_protocol ALTER COLUMN protocol_id SET DEFAULT ('PI'::text || nextval('public.network_protocol_protocol_id'::regclass));
 K   ALTER TABLE public.network_protocol ALTER COLUMN protocol_id DROP DEFAULT;
       public          postgres    false    228    223            �           2604    16796     network_protocol_collection r_no    DEFAULT     �   ALTER TABLE ONLY public.network_protocol_collection ALTER COLUMN r_no SET DEFAULT nextval('public.network_protocol_collection_r_no_seq'::regclass);
 O   ALTER TABLE public.network_protocol_collection ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    226    224            �           2604    16797 '   network_protocol_collection protocol_id    DEFAULT     �   ALTER TABLE ONLY public.network_protocol_collection ALTER COLUMN protocol_id SET DEFAULT ('PI'::text || nextval('public.network_protocol_collection_protocol_id'::regclass));
 V   ALTER TABLE public.network_protocol_collection ALTER COLUMN protocol_id DROP DEFAULT;
       public          postgres    false    225    224            �           2604    16798    site_management site_id    DEFAULT     �   ALTER TABLE ONLY public.site_management ALTER COLUMN site_id SET DEFAULT ('SI'::text || nextval('public.site_management_site_id'::regclass));
 F   ALTER TABLE public.site_management ALTER COLUMN site_id DROP DEFAULT;
       public          postgres    false    232    230            A          0    16739    device_data_collection 
   TABLE DATA           T   COPY public.device_data_collection (r_no, device_id, device_parameters) FROM stdin;
    public          postgres    false    214   
n       D          0    16744    device_management 
   TABLE DATA           �   COPY public.device_management (r_no, device_id, device_model, device_mac_address, device_firmware_version, description, last_updated_by, device_name, last_updated_on, is_service_enabled, device_status) FROM stdin;
    public          postgres    false    217   �n       F          0    16752    device_management_log 
   TABLE DATA           �   COPY public.device_management_log (device_id, device_model, device_mac_address, device_firmware_version, description, last_updated_by, device_name, last_updated_on, r_no) FROM stdin;
    public          postgres    false    219   �o       J          0    16761    network_protocol 
   TABLE DATA           �   COPY public.network_protocol (r_no, protocol_id, device_id, client_id, username, password, host, port, last_updated_by, last_updated_on) FROM stdin;
    public          postgres    false    223   �u       K          0    16765    network_protocol_collection 
   TABLE DATA           W   COPY public.network_protocol_collection (r_no, protocol_id, protocol_name) FROM stdin;
    public          postgres    false    224   3x       Q          0    16773    site_management 
   TABLE DATA           �   COPY public.site_management (r_no, company_name, site_name, site_admin_email, site_location, site_address, site_admin_name, new_site_admin_name, industry, site_id, site_status, site_created_on) FROM stdin;
    public          postgres    false    230   Px       R          0    16781    site_management_log 
   TABLE DATA           �   COPY public.site_management_log (r_no, company_name, site_name, site_admin_email, site_location, site_address, site_admin_name, new_site_admin_name, industry, site_id, site_status, site_created_on) FROM stdin;
    public          postgres    false    231   z       f           0    0     device_data_collection_device_id    SEQUENCE SET     N   SELECT pg_catalog.setval('public.device_data_collection_device_id', 1, true);
          public          postgres    false    215            g           0    0    device_data_collection_r_no_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.device_data_collection_r_no_seq', 23, true);
          public          postgres    false    216            h           0    0    device_management_device_id    SEQUENCE SET     J   SELECT pg_catalog.setval('public.device_management_device_id', 23, true);
          public          postgres    false    218            i           0    0    device_management_log_device_id    SEQUENCE SET     N   SELECT pg_catalog.setval('public.device_management_log_device_id', 1, false);
          public          postgres    false    220            j           0    0    device_management_log_r_no_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.device_management_log_r_no_seq', 76, true);
          public          postgres    false    221            k           0    0    device_management_r_no_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.device_management_r_no_seq', 55, true);
          public          postgres    false    222            l           0    0 '   network_protocol_collection_protocol_id    SEQUENCE SET     V   SELECT pg_catalog.setval('public.network_protocol_collection_protocol_id', 1, false);
          public          postgres    false    225            m           0    0 $   network_protocol_collection_r_no_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public.network_protocol_collection_r_no_seq', 1, false);
          public          postgres    false    226            n           0    0    network_protocol_device_id    SEQUENCE SET     H   SELECT pg_catalog.setval('public.network_protocol_device_id', 2, true);
          public          postgres    false    227            o           0    0    network_protocol_protocol_id    SEQUENCE SET     K   SELECT pg_catalog.setval('public.network_protocol_protocol_id', 25, true);
          public          postgres    false    228            p           0    0    network_protocol_r_no_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.network_protocol_r_no_seq', 25, true);
          public          postgres    false    229            q           0    0    site_management_site_id    SEQUENCE SET     E   SELECT pg_catalog.setval('public.site_management_site_id', 1, true);
          public          postgres    false    232            �           2606    16800 2   device_data_collection device_data_collection_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.device_data_collection
    ADD CONSTRAINT device_data_collection_pkey PRIMARY KEY (r_no);
 \   ALTER TABLE ONLY public.device_data_collection DROP CONSTRAINT device_data_collection_pkey;
       public            postgres    false    214            �           2606    16802    network_protocol device_id_ukey 
   CONSTRAINT     _   ALTER TABLE ONLY public.network_protocol
    ADD CONSTRAINT device_id_ukey UNIQUE (device_id);
 I   ALTER TABLE ONLY public.network_protocol DROP CONSTRAINT device_id_ukey;
       public            postgres    false    223            �           2606    16804 0   device_management_log device_management_log_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.device_management_log
    ADD CONSTRAINT device_management_log_pkey PRIMARY KEY (r_no);
 Z   ALTER TABLE ONLY public.device_management_log DROP CONSTRAINT device_management_log_pkey;
       public            postgres    false    219            �           2606    16806 (   device_management device_management_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.device_management
    ADD CONSTRAINT device_management_pkey PRIMARY KEY (r_no);
 R   ALTER TABLE ONLY public.device_management DROP CONSTRAINT device_management_pkey;
       public            postgres    false    217            �           2606    16808 <   network_protocol_collection network_protocol_collection_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public.network_protocol_collection
    ADD CONSTRAINT network_protocol_collection_pkey PRIMARY KEY (r_no);
 f   ALTER TABLE ONLY public.network_protocol_collection DROP CONSTRAINT network_protocol_collection_pkey;
       public            postgres    false    224            �           2606    16810 &   network_protocol network_protocol_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.network_protocol
    ADD CONSTRAINT network_protocol_pkey PRIMARY KEY (r_no);
 P   ALTER TABLE ONLY public.network_protocol DROP CONSTRAINT network_protocol_pkey;
       public            postgres    false    223            �           2606    16812 ,   site_management_log site_management_log_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.site_management_log
    ADD CONSTRAINT site_management_log_pkey PRIMARY KEY (r_no);
 V   ALTER TABLE ONLY public.site_management_log DROP CONSTRAINT site_management_log_pkey;
       public            postgres    false    231            �           2606    16814 $   site_management site_management_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.site_management
    ADD CONSTRAINT site_management_pkey PRIMARY KEY (r_no);
 N   ALTER TABLE ONLY public.site_management DROP CONSTRAINT site_management_pkey;
       public            postgres    false    230            �           2620    16815 3   device_management device_management_changes_trigger    TRIGGER     �   CREATE TRIGGER device_management_changes_trigger AFTER INSERT OR DELETE OR UPDATE ON public.device_management FOR EACH ROW EXECUTE FUNCTION public.notify_device_management_changes();
 L   DROP TRIGGER device_management_changes_trigger ON public.device_management;
       public          postgres    false    217    235            �           2620    16816 '   device_management device_management_trg    TRIGGER     �   CREATE TRIGGER device_management_trg AFTER INSERT ON public.device_management FOR EACH ROW EXECUTE FUNCTION public.devicetrigger();
 @   DROP TRIGGER device_management_trg ON public.device_management;
       public          postgres    false    217    233            �           2620    16817 +   device_management device_management_trg_del    TRIGGER     �   CREATE TRIGGER device_management_trg_del AFTER UPDATE ON public.device_management FOR EACH ROW EXECUTE FUNCTION public.devicetrigger_del();
 D   DROP TRIGGER device_management_trg_del ON public.device_management;
       public          postgres    false    217    234            �           2620    16818 #   site_management site_management_log    TRIGGER     �   CREATE TRIGGER site_management_log AFTER INSERT ON public.site_management FOR EACH ROW EXECUTE FUNCTION public.site_insert_trg();
 <   DROP TRIGGER site_management_log ON public.site_management;
       public          postgres    false    236    230            A   �   x�U�1k�0F�rcɹ���Х�ɘ���0��H����>�!���a��r��{��O=t��w��Eݮ�\�뢯P#�VBZ.-Yj���M�F�����W=��QR�1l=�t�H�*��z�;�N�c�{d�������4.�����Whi�uFf��D3�����E��>��ώ���c;0`Y�Rg:`:0��P LLLo/�� 2b       D   �   x�]�=n1��z�\���y7㚆��X�R$8�]��Dz�G��D�?����\?
<���r�"8{����WF��S ڑ�2OQ�iz��۽��̸���o��)�g����9Y��l���eZd���7��F���ђej��M�(���(|��W��e�yG��%�"J�c|ѩ�2�
E�o�C��`�,cDc3^�S���&q�      F   �  x���Kr�H���S�UQ��ֽ��O�XI�������w����Lp=6H��"}����_�����G����N������^���?qB4y�$��7�\:�>zk���Q<��l~F��ܰ���g�!d��b�}��F�%���ה8$���t|��\�Qi��-pP�xF��j\T�-�)ݏ+C�>a6ʛo��a|�e�|��$���Y��P�W��ⓔZ��Y�����0��o������~�v�����%D3����zx\�J���*�
1o��0·������-i�XX���R|Q����+u�x�:��M��0�U>{�b��+�e�ү�D��P"������c,5W!Nw�˒ט���^}E�+gh�ܥ-kq�k�(J\WE�5+z�,�O�i0��5���Q<H֔��SI�.�7V�lQ9�|�����d�V��%�+�*b���Z��'d�A�KE���V�wV�)N�}^�i3�/�����|)UQp��LC�~�ֱd��H��1�g~�7�Q��{7~9�Dq��C���_ϸ⹰����I<��a�=��4���������8�����fC�>�0�
hJ�a[4�cu�4�tr�4w�q:�D��P��E���
ɤ�*xF߶[��uT�E�s���L��v��5�px|�4$���qT,�n�A��|Pg�7юg�4�7��^sK��H#H����^^�bM��O�~7��j�Ϸ�Ylm�&^�8�iT�j+���-f�2��<�&��傀����t�oa����°i�S8Aj�J���j�Ь��~w�Ƕ.�Ao�bU��[Zi�O�hgY��J{X��o��~���/F8���
�{A���ڕ��	f��`���հ�LzU�`�f��=&��b�)x0��'b^٫�FW;`:������#!пǷG\�ۣ�st��^F�4�n�P}{M��J/1)㌹���W�Љ�&/���	�_:��*�����m1y�NzXEBh�#��L1t�a-��Cᦕ"�q:Ca�F7��r��M�"$����d-��s���uRYG��P�T�;���$�X�v���L/�#~݌�����Hmw��}�,>Ԙ�bspt*�qKǣ[.zپ\2߸o8�%�Z��
Ş��C���p�+�cű�sc��?�O��K�-�;��Q���U�nϦ��{9����Jm��Bhn�K�%�sI�z�����b	��ܓ�O<CS�ѯB>Jw%���cr���ɏ���-W�}���A��hC2*aJ�ݑ�ւ�_Vc�%���ՠ�-XkRwwLx���t����)��2�X�R��#Z�:o���SZ��_�"�P����̍�U�WT,dΖ�ѻu��7��Eo�����tQ�o��(^+k�j�Z,���K8!��.�y�����BH��؅4���;7�>!��-WG�fX0Â�=ܑ�rJ(s� �3Q��-Wcv9u�����N�������h���պ��D�!J��9T�U(���~���a,�%      J   o  x���Oo1�����ʅ������ �T���o���t7b���&m
�����]�����f��=�4Nf���n�<���/�݌}�ե>�K��%�!@�������H��IH��F̍�+��K�s��b�L6aj��R�f�L��8�Ղt������(#~4��܇>��]�;��g���D��$�P��d�2�cp?~�$6R����*�lR6HLs;"��3�6_��RK�䁢��.%3o,�3�Ϗ,7*��J�,)K`�)�L���Q�{2�+��K���4�S57��}���qE�xxq`�Ԣ�����V��5�E�4n�]�w��ܘ5Y����(����휆��ͧB��[�&�y�&K�R�@�V�ˡΖ�B�.T��̝���Y����|t9V!��$R+A�P�3�	��܏����Ž/�K�$R+A�R\��',�z��L>�LN�s`�j%V+A�Q���j�x=���!Iղ���G�%����Mf��Q��q̜�hY����ֺ�Z���n��Ͽ�w7}t����������I�>#e��� ﵾ~�M��QB�8�����Z��BF�lA������b(\M�������Ncu��WrsR,�0�#_�${嬵��@�      K      x������ � �      Q   �  x��SM�� =ï�1×�����^���q{[��_��n۫U�ļǼP@�V�ߑ���|��l(��``=/4G����ԡ?��<��L�H!���8Xm��KdS��j�y�V/��:T�� ��6T�@�-���:
��BӇ�*;2�#�p'�����q��C.��9��جH�1@���KpF�|���>��d���SrR;�jQ��-���ΈbA�!�w;�Gm��5�������V�ǹ{�L�0��*(Z"�.�bH�_O?7{e�E�Z̃�
A���[nm�U��
�A
)��#KZ�
�u����$��p<���H>bd�n��z /�+�~���P��޽�ղ��	z��8{z��fs����]o����l�Ϳ�\�y�C[�5�,���zQ$iL��T9�}h˚���s&��?�஦0)��,�4ZCA_8����HT      R   �   x���=�0�g��@#ǉC�	FN�%
��' U���I����>��~�����r���v��,"$��A#u�L��@d� ����ޟ ���0aD��%�6�����ȆhI9bmI0�fr�4S�[���>]�]I��b�jVԪ�(��~�k��jw�^Ǭ�h��n�Q     
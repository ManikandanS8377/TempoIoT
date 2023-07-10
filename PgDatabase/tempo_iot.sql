PGDMP     
        
    
        {         	   tempo_iot    15.2    15.2 P    V           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            W           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            X           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            Y           1262    32883 	   tempo_iot    DATABASE     |   CREATE DATABASE tempo_iot WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_World.1252';
    DROP DATABASE tempo_iot;
                postgres    false            �            1255    32884    devicetrigger()    FUNCTION     �  CREATE FUNCTION public.devicetrigger() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
insert into device_management_log(device_id,device_name,device_model,device_mac_address,device_firmware_version,description,last_updated_by) values (NEW.device_id,NEW.device_name,NEW.device_model,NEW.device_mac_address,NEW.device_firmware_version,NEW.description,NEW.last_updated_by);
return new;
end;
$$;
 &   DROP FUNCTION public.devicetrigger();
       public          postgres    false            �            1255    32885    devicetrigger_del()    FUNCTION     �  CREATE FUNCTION public.devicetrigger_del() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
insert into device_management_log(device_id,device_name,device_model,device_mac_address,device_firmware_version,description,last_updated_by) values (NEW.device_id,NEW.device_name,NEW.device_model,NEW.device_mac_address,NEW.device_firmware_version,NEW.description,NEW.last_updated_by);
return new;
end;
$$;
 *   DROP FUNCTION public.devicetrigger_del();
       public          postgres    false            �            1255    32970 "   notify_device_management_changes()    FUNCTION     �   CREATE FUNCTION public.notify_device_management_changes() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
  PERFORM pg_notify('table_changes', row_to_json(NEW)::text);
  RETURN NEW;
END;
$$;
 9   DROP FUNCTION public.notify_device_management_changes();
       public          postgres    false            �            1255    32886    site_insert_trg()    FUNCTION     �  CREATE FUNCTION public.site_insert_trg() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
insert into site_management_log(company_name, site_name, site_admin_email, site_location, site_address, site_admin_name, new_site_admin_name, industry)
	values(new.company_name,new.site_name, new.site_admin_email, new.site_location, new.site_address, new.site_admin_name, new.new_site_admin_name, new.industry);
	return new;
	end;
	$$;
 (   DROP FUNCTION public.site_insert_trg();
       public          postgres    false            �            1259    32887    device_data_collection    TABLE     �   CREATE TABLE public.device_data_collection (
    r_no integer NOT NULL,
    device_id character varying(100),
    device_parameters character varying(100)
);
 *   DROP TABLE public.device_data_collection;
       public         heap    postgres    false            �            1259    32890     device_data_collection_device_id    SEQUENCE     �   CREATE SEQUENCE public.device_data_collection_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 7   DROP SEQUENCE public.device_data_collection_device_id;
       public          postgres    false    214            Z           0    0     device_data_collection_device_id    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.device_data_collection_device_id OWNED BY public.device_data_collection.device_id;
          public          postgres    false    215            �            1259    32891    device_data_collection_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.device_data_collection_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.device_data_collection_r_no_seq;
       public          postgres    false    214            [           0    0    device_data_collection_r_no_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.device_data_collection_r_no_seq OWNED BY public.device_data_collection.r_no;
          public          postgres    false    216            �            1259    32892    device_management    TABLE       CREATE TABLE public.device_management (
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
       public         heap    postgres    false            �            1259    32899    device_management_device_id    SEQUENCE     �   CREATE SEQUENCE public.device_management_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 2   DROP SEQUENCE public.device_management_device_id;
       public          postgres    false    217            \           0    0    device_management_device_id    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.device_management_device_id OWNED BY public.device_management.device_id;
          public          postgres    false    218            �            1259    32900    device_management_log    TABLE     �  CREATE TABLE public.device_management_log (
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
       public         heap    postgres    false            �            1259    32906    device_management_log_device_id    SEQUENCE     �   CREATE SEQUENCE public.device_management_log_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 6   DROP SEQUENCE public.device_management_log_device_id;
       public          postgres    false    219            ]           0    0    device_management_log_device_id    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.device_management_log_device_id OWNED BY public.device_management_log.device_id;
          public          postgres    false    220            �            1259    32907    device_management_log_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.device_management_log_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.device_management_log_r_no_seq;
       public          postgres    false    219            ^           0    0    device_management_log_r_no_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.device_management_log_r_no_seq OWNED BY public.device_management_log.r_no;
          public          postgres    false    221            �            1259    32908    device_management_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.device_management_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.device_management_r_no_seq;
       public          postgres    false    217            _           0    0    device_management_r_no_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.device_management_r_no_seq OWNED BY public.device_management.r_no;
          public          postgres    false    222            �            1259    32909    network_protocol    TABLE     �  CREATE TABLE public.network_protocol (
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
       public         heap    postgres    false            �            1259    32913    network_protocol_collection    TABLE     �   CREATE TABLE public.network_protocol_collection (
    r_no integer NOT NULL,
    protocol_id character varying(100),
    protocol_name character varying(200)
);
 /   DROP TABLE public.network_protocol_collection;
       public         heap    postgres    false            �            1259    32916 '   network_protocol_collection_protocol_id    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_collection_protocol_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 >   DROP SEQUENCE public.network_protocol_collection_protocol_id;
       public          postgres    false    224            `           0    0 '   network_protocol_collection_protocol_id    SEQUENCE OWNED BY     w   ALTER SEQUENCE public.network_protocol_collection_protocol_id OWNED BY public.network_protocol_collection.protocol_id;
          public          postgres    false    225            �            1259    32917 $   network_protocol_collection_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_collection_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public.network_protocol_collection_r_no_seq;
       public          postgres    false    224            a           0    0 $   network_protocol_collection_r_no_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public.network_protocol_collection_r_no_seq OWNED BY public.network_protocol_collection.r_no;
          public          postgres    false    226            �            1259    32918    network_protocol_device_id    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 1   DROP SEQUENCE public.network_protocol_device_id;
       public          postgres    false    223            b           0    0    network_protocol_device_id    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.network_protocol_device_id OWNED BY public.network_protocol.device_id;
          public          postgres    false    227            �            1259    32919    network_protocol_protocol_id    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_protocol_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 3   DROP SEQUENCE public.network_protocol_protocol_id;
       public          postgres    false    223            c           0    0    network_protocol_protocol_id    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.network_protocol_protocol_id OWNED BY public.network_protocol.protocol_id;
          public          postgres    false    228            �            1259    32920    network_protocol_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_r_no_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 0   DROP SEQUENCE public.network_protocol_r_no_seq;
       public          postgres    false    223            d           0    0    network_protocol_r_no_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.network_protocol_r_no_seq OWNED BY public.network_protocol.r_no;
          public          postgres    false    229            �            1259    32921    site_management    TABLE     @  CREATE TABLE public.site_management (
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
       public         heap    postgres    false    222            �            1259    32929    site_management_log    TABLE     ^  CREATE TABLE public.site_management_log (
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
       public         heap    postgres    false    222            �            1259    32972    site_management_site_id    SEQUENCE     �   CREATE SEQUENCE public.site_management_site_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 .   DROP SEQUENCE public.site_management_site_id;
       public          postgres    false    230            e           0    0    site_management_site_id    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.site_management_site_id OWNED BY public.site_management.site_id;
          public          postgres    false    232            �           2604    32936    device_data_collection r_no    DEFAULT     �   ALTER TABLE ONLY public.device_data_collection ALTER COLUMN r_no SET DEFAULT nextval('public.device_data_collection_r_no_seq'::regclass);
 J   ALTER TABLE public.device_data_collection ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    216    214            �           2604    32938    device_management r_no    DEFAULT     �   ALTER TABLE ONLY public.device_management ALTER COLUMN r_no SET DEFAULT nextval('public.device_management_r_no_seq'::regclass);
 E   ALTER TABLE public.device_management ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    222    217            �           2604    32939    device_management device_id    DEFAULT     �   ALTER TABLE ONLY public.device_management ALTER COLUMN device_id SET DEFAULT ('DI'::text || nextval('public.device_management_device_id'::regclass));
 J   ALTER TABLE public.device_management ALTER COLUMN device_id DROP DEFAULT;
       public          postgres    false    218    217            �           2604    32940    device_management_log device_id    DEFAULT     �   ALTER TABLE ONLY public.device_management_log ALTER COLUMN device_id SET DEFAULT ('DI'::text || nextval('public.device_management_log_device_id'::regclass));
 N   ALTER TABLE public.device_management_log ALTER COLUMN device_id DROP DEFAULT;
       public          postgres    false    220    219            �           2604    32941    device_management_log r_no    DEFAULT     �   ALTER TABLE ONLY public.device_management_log ALTER COLUMN r_no SET DEFAULT nextval('public.device_management_log_r_no_seq'::regclass);
 I   ALTER TABLE public.device_management_log ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    221    219            �           2604    32942    network_protocol r_no    DEFAULT     ~   ALTER TABLE ONLY public.network_protocol ALTER COLUMN r_no SET DEFAULT nextval('public.network_protocol_r_no_seq'::regclass);
 D   ALTER TABLE public.network_protocol ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    229    223            �           2604    32943    network_protocol protocol_id    DEFAULT     �   ALTER TABLE ONLY public.network_protocol ALTER COLUMN protocol_id SET DEFAULT ('PI'::text || nextval('public.network_protocol_protocol_id'::regclass));
 K   ALTER TABLE public.network_protocol ALTER COLUMN protocol_id DROP DEFAULT;
       public          postgres    false    228    223            �           2604    32945     network_protocol_collection r_no    DEFAULT     �   ALTER TABLE ONLY public.network_protocol_collection ALTER COLUMN r_no SET DEFAULT nextval('public.network_protocol_collection_r_no_seq'::regclass);
 O   ALTER TABLE public.network_protocol_collection ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    226    224            �           2604    32946 '   network_protocol_collection protocol_id    DEFAULT     �   ALTER TABLE ONLY public.network_protocol_collection ALTER COLUMN protocol_id SET DEFAULT ('PI'::text || nextval('public.network_protocol_collection_protocol_id'::regclass));
 V   ALTER TABLE public.network_protocol_collection ALTER COLUMN protocol_id DROP DEFAULT;
       public          postgres    false    225    224            �           2604    32973    site_management site_id    DEFAULT     �   ALTER TABLE ONLY public.site_management ALTER COLUMN site_id SET DEFAULT ('SI'::text || nextval('public.site_management_site_id'::regclass));
 F   ALTER TABLE public.site_management ALTER COLUMN site_id DROP DEFAULT;
       public          postgres    false    232    230            A          0    32887    device_data_collection 
   TABLE DATA           T   COPY public.device_data_collection (r_no, device_id, device_parameters) FROM stdin;
    public          postgres    false    214   n       D          0    32892    device_management 
   TABLE DATA           �   COPY public.device_management (r_no, device_id, device_model, device_mac_address, device_firmware_version, description, last_updated_by, device_name, last_updated_on, is_service_enabled, device_status) FROM stdin;
    public          postgres    false    217   �n       F          0    32900    device_management_log 
   TABLE DATA           �   COPY public.device_management_log (device_id, device_model, device_mac_address, device_firmware_version, description, last_updated_by, device_name, last_updated_on, r_no) FROM stdin;
    public          postgres    false    219   �p       J          0    32909    network_protocol 
   TABLE DATA           �   COPY public.network_protocol (r_no, protocol_id, device_id, client_id, username, password, host, port, last_updated_by, last_updated_on) FROM stdin;
    public          postgres    false    223   �u       K          0    32913    network_protocol_collection 
   TABLE DATA           W   COPY public.network_protocol_collection (r_no, protocol_id, protocol_name) FROM stdin;
    public          postgres    false    224   �w       Q          0    32921    site_management 
   TABLE DATA           �   COPY public.site_management (r_no, company_name, site_name, site_admin_email, site_location, site_address, site_admin_name, new_site_admin_name, industry, site_id, site_status, site_created_on) FROM stdin;
    public          postgres    false    230   �w       R          0    32929    site_management_log 
   TABLE DATA           �   COPY public.site_management_log (r_no, company_name, site_name, site_admin_email, site_location, site_address, site_admin_name, new_site_admin_name, industry, site_id, site_status, site_created_on) FROM stdin;
    public          postgres    false    231   �y       f           0    0     device_data_collection_device_id    SEQUENCE SET     N   SELECT pg_catalog.setval('public.device_data_collection_device_id', 1, true);
          public          postgres    false    215            g           0    0    device_data_collection_r_no_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public.device_data_collection_r_no_seq', 18, true);
          public          postgres    false    216            h           0    0    device_management_device_id    SEQUENCE SET     J   SELECT pg_catalog.setval('public.device_management_device_id', 18, true);
          public          postgres    false    218            i           0    0    device_management_log_device_id    SEQUENCE SET     N   SELECT pg_catalog.setval('public.device_management_log_device_id', 1, false);
          public          postgres    false    220            j           0    0    device_management_log_r_no_seq    SEQUENCE SET     M   SELECT pg_catalog.setval('public.device_management_log_r_no_seq', 70, true);
          public          postgres    false    221            k           0    0    device_management_r_no_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.device_management_r_no_seq', 48, true);
          public          postgres    false    222            l           0    0 '   network_protocol_collection_protocol_id    SEQUENCE SET     V   SELECT pg_catalog.setval('public.network_protocol_collection_protocol_id', 1, false);
          public          postgres    false    225            m           0    0 $   network_protocol_collection_r_no_seq    SEQUENCE SET     S   SELECT pg_catalog.setval('public.network_protocol_collection_r_no_seq', 1, false);
          public          postgres    false    226            n           0    0    network_protocol_device_id    SEQUENCE SET     H   SELECT pg_catalog.setval('public.network_protocol_device_id', 2, true);
          public          postgres    false    227            o           0    0    network_protocol_protocol_id    SEQUENCE SET     K   SELECT pg_catalog.setval('public.network_protocol_protocol_id', 20, true);
          public          postgres    false    228            p           0    0    network_protocol_r_no_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.network_protocol_r_no_seq', 20, true);
          public          postgres    false    229            q           0    0    site_management_site_id    SEQUENCE SET     F   SELECT pg_catalog.setval('public.site_management_site_id', 1, false);
          public          postgres    false    232            �           2606    32948 2   device_data_collection device_data_collection_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.device_data_collection
    ADD CONSTRAINT device_data_collection_pkey PRIMARY KEY (r_no);
 \   ALTER TABLE ONLY public.device_data_collection DROP CONSTRAINT device_data_collection_pkey;
       public            postgres    false    214            �           2606    32950    network_protocol device_id_ukey 
   CONSTRAINT     _   ALTER TABLE ONLY public.network_protocol
    ADD CONSTRAINT device_id_ukey UNIQUE (device_id);
 I   ALTER TABLE ONLY public.network_protocol DROP CONSTRAINT device_id_ukey;
       public            postgres    false    223            �           2606    32952 0   device_management_log device_management_log_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.device_management_log
    ADD CONSTRAINT device_management_log_pkey PRIMARY KEY (r_no);
 Z   ALTER TABLE ONLY public.device_management_log DROP CONSTRAINT device_management_log_pkey;
       public            postgres    false    219            �           2606    32954 (   device_management device_management_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.device_management
    ADD CONSTRAINT device_management_pkey PRIMARY KEY (r_no);
 R   ALTER TABLE ONLY public.device_management DROP CONSTRAINT device_management_pkey;
       public            postgres    false    217            �           2606    32956 <   network_protocol_collection network_protocol_collection_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public.network_protocol_collection
    ADD CONSTRAINT network_protocol_collection_pkey PRIMARY KEY (r_no);
 f   ALTER TABLE ONLY public.network_protocol_collection DROP CONSTRAINT network_protocol_collection_pkey;
       public            postgres    false    224            �           2606    32958 &   network_protocol network_protocol_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.network_protocol
    ADD CONSTRAINT network_protocol_pkey PRIMARY KEY (r_no);
 P   ALTER TABLE ONLY public.network_protocol DROP CONSTRAINT network_protocol_pkey;
       public            postgres    false    223            �           2606    32960 ,   site_management_log site_management_log_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.site_management_log
    ADD CONSTRAINT site_management_log_pkey PRIMARY KEY (r_no);
 V   ALTER TABLE ONLY public.site_management_log DROP CONSTRAINT site_management_log_pkey;
       public            postgres    false    231            �           2606    32962 $   site_management site_management_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.site_management
    ADD CONSTRAINT site_management_pkey PRIMARY KEY (r_no);
 N   ALTER TABLE ONLY public.site_management DROP CONSTRAINT site_management_pkey;
       public            postgres    false    230            �           2620    32971 3   device_management device_management_changes_trigger    TRIGGER     �   CREATE TRIGGER device_management_changes_trigger AFTER INSERT OR DELETE OR UPDATE ON public.device_management FOR EACH ROW EXECUTE FUNCTION public.notify_device_management_changes();
 L   DROP TRIGGER device_management_changes_trigger ON public.device_management;
       public          postgres    false    236    217            �           2620    32963 '   device_management device_management_trg    TRIGGER     �   CREATE TRIGGER device_management_trg AFTER INSERT ON public.device_management FOR EACH ROW EXECUTE FUNCTION public.devicetrigger();
 @   DROP TRIGGER device_management_trg ON public.device_management;
       public          postgres    false    233    217            �           2620    32964 +   device_management device_management_trg_del    TRIGGER     �   CREATE TRIGGER device_management_trg_del AFTER UPDATE ON public.device_management FOR EACH ROW EXECUTE FUNCTION public.devicetrigger_del();
 D   DROP TRIGGER device_management_trg_del ON public.device_management;
       public          postgres    false    234    217            �           2620    32965 #   site_management site_management_log    TRIGGER     �   CREATE TRIGGER site_management_log AFTER INSERT ON public.site_management FOR EACH ROW EXECUTE FUNCTION public.site_insert_trg();
 <   DROP TRIGGER site_management_log ON public.site_management;
       public          postgres    false    230    235            A   �   x�U�=1��?$����qq8]���D���}��AK�yh�+t=ӫ*��ު���I(/��O��2ag���pP��%�ѹњ��m^ۚ1��@!=�
�u#iH�W�U�����f�m�X5B��aK��{fD��<�dM�X���ӺiM�#���h������S��g74�8��u���Z%      D   �  x�e�M��0���)r����l��	f#Ld7h'w�޾�{��L���"[x�fa(�\�4jƬ�ѼIefx��T�<�VR�<*w"J��=[g����B�N�J�Dp��A���q(�I��X�����(j�c�`T��!?𑛶!Z���VP�($zg�sa�F�F�%<�x������y�s��hu���w�������|�(�?����2ׯ�cR�Wd5ŕ�:��I
~揋�����5�=�5��+qIw�?���5����nMj@�{�ȋU��3.�+�e��|ҺQE��-����BH�Ec��yY�6��ٲ��*YJ�{���n+DH	xT;~�����D���m�C�<�����Rq Z��yi�W)����v.�@�lͶ�y���O�CM'r�I���쾋�}�uj���      F   9  x����r�6���S������u7��	��%J�ԗ�Z�d���AI��zڄ�a
��o��|������o��n���cϑ�G�L�(w1v�kbI�V�\w�}��h��7,��9^��`���a׎bȒc�NV����ۍ��,�]�PS������������?�J堑����]�q&!��l.-Ǖ�jH�����c���~ş�0��B��(�+G��(���ĥu�$�fx�_n��#$$&v'i?��Z���r���(�>߿��g�R��r��Vpu��y3<����ˉi�+X��R鸄"Lϑ+MrQ'����0�Y>{�"
�*1ԥ�ү���X��l}�a�1�+;J��)�%E Q^�/��R���"mi��P#��:+�.YDRTß�i0�@���LK�6e!�TǼH�U�	%�&��gQG٫զyI���
E�P�͕�~"F��D�X�Os�zg��,R���l�8�`H˰?���wV
�TA��:W0�M���cɤ59���~'����o(�={�f�ߝX,x|�������	�A<6�P�����v���_w{ד��s��i�����	8�����`9	L �8�-7�'�7�d�"n8l��p±�L�|�3�-�
I�8��=n6H8k/�����^�:��v3�[�+u�[�p�8�fn;l!��{@����&��������kn��P��@Jn_��ˋ�Z���q��w���[��Z%	�*N�JS��
�2t����v�>���������poa��5D2&ش,���Z�����R�+n�q�M��/}[��Bo�lU��[Zi�O2���i���v�����`���\;���]��п������a
{v�a Jj0���q�*�ԌxZb�3�RH�����2��BAP�6�� �=(�6��)�����Ϳ����{�����������$`Z�lIg�S*�5	Ih�R��*C�e"��"I� ��W�H�Y$���F�0fgq"��T�R�т�)B�4�a����I���$�HyI[L+�ۙN�2�T[�̩��&\s&�+z1�v���ɽ����#JƏ���Hj�KL���b���`��ѩl��;��r/��s��7�GРX�i�8��|���G'at�8VsnL����m�}ia��}�7[מ�g��۳Ij�^����R����Z�m|ɹdt.i~V�`֚���X\�%���S4%�*�siQb?���a��K�ݑ�n�z��'���%h� ڐ�Jh�Rswd�� ��UI`����lP
��irwL�p�������W$��$�Vɥ��#Z�:���ݻ4�����P2�{CmX�V� bLeY      J   �  x������0Ek�/��HQ�jL�f$�lc��b�U�A��}.g'�HR�`��G�#^�������Y_�z�W�����G7k_V�����bv�}��d8�~��6R#v�p����Zj��ge�	�I�K5󲙾�u��@���0���e�M ���������9�p%Cm�](YR�d��z�-x�/��F�q"�\�M��io7�2ߑ��꼔Z�%� ]Jf�\���ˍJ�ťc K��jJ6�|����{"#��Y|��J�!��y�~������H<|�8���Ԣ�����Igi��o���#���ˍY�%.�!)��b�~pK��z7_u�nn��$����,�cH-�Xi$.�8[R!T���n˴�#X��M�G�c�N"��	K�7,\��)����Ž/�K�$R+A�R\��'\�z��L~�LN�s`�j%V+A���a��#����C��}q����\��      K      x������ � �      Q   �  x��SKn�0]ۧ��<�_�U��p6X�i�"n_;	�B@�������cP���wek1��,�FP��	3����h���6�R��&T�M\nI^)�q$:V�)�Y���u��܏��z�]�H�ա�h��ZZGA��C��P�ˆt]�/f�w1�H��v����<�p���#E� �V^.����a��{���O�I�(��BOEB
; ��΄d����v�UNRԤok���Z�c\={ I���*(Z"�.�aHݞ6���ǢH#�Ap� TJٍ�&�]��
�A
)��K��
թכ��$���ZձiHv1����A��=��ȕK�DQ������j�y�.2��o:49\`�b?<��x	�M���_�Na{؇�|4PCi�W֋"�Ƥ?H�R��8.B      R   q   x���1
�@��W�>t�݋o��3�&錛�>$)���� $аʴܦG����m����ǥG�rg�&o��A��'���s����S�xd$c�5-�o���-��ҳQǤ�/QN6�     
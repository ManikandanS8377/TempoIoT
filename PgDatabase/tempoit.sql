PGDMP                         {         	   tempo_iot    15.2    15.2 L    S           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            T           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            U           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            V           1262    16639 	   tempo_iot    DATABASE     |   CREATE DATABASE tempo_iot WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
    DROP DATABASE tempo_iot;
                postgres    false            �            1255    16640    devicetrigger()    FUNCTION     �  CREATE FUNCTION public.devicetrigger() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
insert into device_management_log(device_id,device_name,device_model,device_mac_address,device_firmware_version,description,last_updated_by) values (NEW.device_id,NEW.device_name,NEW.device_model,NEW.device_mac_address,NEW.device_firmware_version,NEW.description,NEW.last_updated_by);
return new;
end;
$$;
 &   DROP FUNCTION public.devicetrigger();
       public          postgres    false            �            1255    16641    devicetrigger_del()    FUNCTION     �  CREATE FUNCTION public.devicetrigger_del() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
insert into device_management_log(device_id,device_name,device_model,device_mac_address,device_firmware_version,description,last_updated_by) values (NEW.device_id,NEW.device_name,NEW.device_model,NEW.device_mac_address,NEW.device_firmware_version,NEW.description,NEW.last_updated_by);
return new;
end;
$$;
 *   DROP FUNCTION public.devicetrigger_del();
       public          postgres    false            �            1255    16642    site_insert_trg()    FUNCTION     �  CREATE FUNCTION public.site_insert_trg() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
begin
insert into site_management_log(company_name, site_name, site_admin_email, site_location, site_address, site_admin_name, new_site_admin_name, industry)
	values(new.company_name,new.site_name, new.site_admin_email, new.site_location, new.site_address, new.site_admin_name, new.new_site_admin_name, new.industry);
	return new;
	end;
	$$;
 (   DROP FUNCTION public.site_insert_trg();
       public          postgres    false            �            1259    16643    device_data_collection    TABLE     �   CREATE TABLE public.device_data_collection (
    r_no integer NOT NULL,
    device_id character varying(100),
    device_parameters character varying(100)
);
 *   DROP TABLE public.device_data_collection;
       public         heap    postgres    false            �            1259    16646     device_data_collection_device_id    SEQUENCE     �   CREATE SEQUENCE public.device_data_collection_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 7   DROP SEQUENCE public.device_data_collection_device_id;
       public          postgres    false    214            W           0    0     device_data_collection_device_id    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.device_data_collection_device_id OWNED BY public.device_data_collection.device_id;
          public          postgres    false    215            �            1259    16647    device_data_collection_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.device_data_collection_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 6   DROP SEQUENCE public.device_data_collection_r_no_seq;
       public          postgres    false    214            X           0    0    device_data_collection_r_no_seq    SEQUENCE OWNED BY     c   ALTER SEQUENCE public.device_data_collection_r_no_seq OWNED BY public.device_data_collection.r_no;
          public          postgres    false    216            �            1259    16648    device_management    TABLE       CREATE TABLE public.device_management (
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
       public         heap    postgres    false            �            1259    16655    device_management_device_id    SEQUENCE     �   CREATE SEQUENCE public.device_management_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 2   DROP SEQUENCE public.device_management_device_id;
       public          postgres    false    217            Y           0    0    device_management_device_id    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.device_management_device_id OWNED BY public.device_management.device_id;
          public          postgres    false    218            �            1259    16656    device_management_log    TABLE     �  CREATE TABLE public.device_management_log (
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
       public         heap    postgres    false            �            1259    16662    device_management_log_device_id    SEQUENCE     �   CREATE SEQUENCE public.device_management_log_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 6   DROP SEQUENCE public.device_management_log_device_id;
       public          postgres    false    219            Z           0    0    device_management_log_device_id    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.device_management_log_device_id OWNED BY public.device_management_log.device_id;
          public          postgres    false    220            �            1259    16663    device_management_log_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.device_management_log_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.device_management_log_r_no_seq;
       public          postgres    false    219            [           0    0    device_management_log_r_no_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.device_management_log_r_no_seq OWNED BY public.device_management_log.r_no;
          public          postgres    false    221            �            1259    16664    device_management_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.device_management_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.device_management_r_no_seq;
       public          postgres    false    217            \           0    0    device_management_r_no_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.device_management_r_no_seq OWNED BY public.device_management.r_no;
          public          postgres    false    222            �            1259    16665    network_protocol    TABLE     �  CREATE TABLE public.network_protocol (
    r_no bigint NOT NULL,
    protocol_id character varying(45),
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
       public         heap    postgres    false            �            1259    16669    network_protocol_collection    TABLE     �   CREATE TABLE public.network_protocol_collection (
    r_no integer NOT NULL,
    protocol_id character varying(100),
    protocol_name character varying(200)
);
 /   DROP TABLE public.network_protocol_collection;
       public         heap    postgres    false            �            1259    16672 '   network_protocol_collection_protocol_id    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_collection_protocol_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 >   DROP SEQUENCE public.network_protocol_collection_protocol_id;
       public          postgres    false    224            ]           0    0 '   network_protocol_collection_protocol_id    SEQUENCE OWNED BY     w   ALTER SEQUENCE public.network_protocol_collection_protocol_id OWNED BY public.network_protocol_collection.protocol_id;
          public          postgres    false    225            �            1259    16673 $   network_protocol_collection_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_collection_r_no_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public.network_protocol_collection_r_no_seq;
       public          postgres    false    224            ^           0    0 $   network_protocol_collection_r_no_seq    SEQUENCE OWNED BY     m   ALTER SEQUENCE public.network_protocol_collection_r_no_seq OWNED BY public.network_protocol_collection.r_no;
          public          postgres    false    226            �            1259    16674    network_protocol_device_id    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_device_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 1   DROP SEQUENCE public.network_protocol_device_id;
       public          postgres    false    223            _           0    0    network_protocol_device_id    SEQUENCE OWNED BY     ]   ALTER SEQUENCE public.network_protocol_device_id OWNED BY public.network_protocol.device_id;
          public          postgres    false    227            �            1259    16675    network_protocol_protocol_id    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_protocol_id
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 3   DROP SEQUENCE public.network_protocol_protocol_id;
       public          postgres    false    223            `           0    0    network_protocol_protocol_id    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.network_protocol_protocol_id OWNED BY public.network_protocol.protocol_id;
          public          postgres    false    228            �            1259    16676    network_protocol_r_no_seq    SEQUENCE     �   CREATE SEQUENCE public.network_protocol_r_no_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    MAXVALUE 2147483647
    CACHE 1;
 0   DROP SEQUENCE public.network_protocol_r_no_seq;
       public          postgres    false    223            a           0    0    network_protocol_r_no_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.network_protocol_r_no_seq OWNED BY public.network_protocol.r_no;
          public          postgres    false    229            �            1259    16677    site_management    TABLE     @  CREATE TABLE public.site_management (
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
       public         heap    postgres    false    222            �            1259    16685    site_management_log    TABLE     ^  CREATE TABLE public.site_management_log (
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
       public         heap    postgres    false    222            �           2604    16722    device_data_collection r_no    DEFAULT     �   ALTER TABLE ONLY public.device_data_collection ALTER COLUMN r_no SET DEFAULT nextval('public.device_data_collection_r_no_seq'::regclass);
 J   ALTER TABLE public.device_data_collection ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    216    214            �           2604    16723     device_data_collection device_id    DEFAULT     �   ALTER TABLE ONLY public.device_data_collection ALTER COLUMN device_id SET DEFAULT ('DI'::text || nextval('public.device_data_collection_device_id'::regclass));
 O   ALTER TABLE public.device_data_collection ALTER COLUMN device_id DROP DEFAULT;
       public          postgres    false    215    214            �           2604    16724    device_management r_no    DEFAULT     �   ALTER TABLE ONLY public.device_management ALTER COLUMN r_no SET DEFAULT nextval('public.device_management_r_no_seq'::regclass);
 E   ALTER TABLE public.device_management ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    222    217            �           2604    16725    device_management device_id    DEFAULT     �   ALTER TABLE ONLY public.device_management ALTER COLUMN device_id SET DEFAULT ('DI'::text || nextval('public.device_management_device_id'::regclass));
 J   ALTER TABLE public.device_management ALTER COLUMN device_id DROP DEFAULT;
       public          postgres    false    218    217            �           2604    16726    device_management_log device_id    DEFAULT     �   ALTER TABLE ONLY public.device_management_log ALTER COLUMN device_id SET DEFAULT ('DI'::text || nextval('public.device_management_log_device_id'::regclass));
 N   ALTER TABLE public.device_management_log ALTER COLUMN device_id DROP DEFAULT;
       public          postgres    false    220    219            �           2604    16727    device_management_log r_no    DEFAULT     �   ALTER TABLE ONLY public.device_management_log ALTER COLUMN r_no SET DEFAULT nextval('public.device_management_log_r_no_seq'::regclass);
 I   ALTER TABLE public.device_management_log ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    221    219            �           2604    16728    network_protocol r_no    DEFAULT     ~   ALTER TABLE ONLY public.network_protocol ALTER COLUMN r_no SET DEFAULT nextval('public.network_protocol_r_no_seq'::regclass);
 D   ALTER TABLE public.network_protocol ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    229    223            �           2604    16729    network_protocol protocol_id    DEFAULT     �   ALTER TABLE ONLY public.network_protocol ALTER COLUMN protocol_id SET DEFAULT ('PI'::text || nextval('public.network_protocol_protocol_id'::regclass));
 K   ALTER TABLE public.network_protocol ALTER COLUMN protocol_id DROP DEFAULT;
       public          postgres    false    228    223            �           2604    16730    network_protocol device_id    DEFAULT     �   ALTER TABLE ONLY public.network_protocol ALTER COLUMN device_id SET DEFAULT ('DI'::text || nextval('public.network_protocol_device_id'::regclass));
 I   ALTER TABLE public.network_protocol ALTER COLUMN device_id DROP DEFAULT;
       public          postgres    false    227    223            �           2604    16731     network_protocol_collection r_no    DEFAULT     �   ALTER TABLE ONLY public.network_protocol_collection ALTER COLUMN r_no SET DEFAULT nextval('public.network_protocol_collection_r_no_seq'::regclass);
 O   ALTER TABLE public.network_protocol_collection ALTER COLUMN r_no DROP DEFAULT;
       public          postgres    false    226    224            �           2604    16732 '   network_protocol_collection protocol_id    DEFAULT     �   ALTER TABLE ONLY public.network_protocol_collection ALTER COLUMN protocol_id SET DEFAULT ('PI'::text || nextval('public.network_protocol_collection_protocol_id'::regclass));
 V   ALTER TABLE public.network_protocol_collection ALTER COLUMN protocol_id DROP DEFAULT;
       public          postgres    false    225    224            ?          0    16643    device_data_collection 
   TABLE DATA           T   COPY public.device_data_collection (r_no, device_id, device_parameters) FROM stdin;
    public          postgres    false    214   &i       B          0    16648    device_management 
   TABLE DATA           �   COPY public.device_management (r_no, device_id, device_model, device_mac_address, device_firmware_version, description, last_updated_by, device_name, last_updated_on, is_service_enabled, device_status) FROM stdin;
    public          postgres    false    217   xi       D          0    16656    device_management_log 
   TABLE DATA           �   COPY public.device_management_log (device_id, device_model, device_mac_address, device_firmware_version, description, last_updated_by, device_name, last_updated_on, r_no) FROM stdin;
    public          postgres    false    219   ~k       H          0    16665    network_protocol 
   TABLE DATA           �   COPY public.network_protocol (r_no, protocol_id, device_id, client_id, username, password, host, port, last_updated_by, last_updated_on) FROM stdin;
    public          postgres    false    223   �o       I          0    16669    network_protocol_collection 
   TABLE DATA           W   COPY public.network_protocol_collection (r_no, protocol_id, protocol_name) FROM stdin;
    public          postgres    false    224   ]p       O          0    16677    site_management 
   TABLE DATA           �   COPY public.site_management (r_no, company_name, site_name, site_admin_email, site_location, site_address, site_admin_name, new_site_admin_name, industry, site_id, site_status, site_created_on) FROM stdin;
    public          postgres    false    230   zp       P          0    16685    site_management_log 
   TABLE DATA           �   COPY public.site_management_log (r_no, company_name, site_name, site_admin_email, site_location, site_address, site_admin_name, new_site_admin_name, industry, site_id, site_status, site_created_on) FROM stdin;
    public          postgres    false    231   !r       b           0    0     device_data_collection_device_id    SEQUENCE SET     O   SELECT pg_catalog.setval('public.device_data_collection_device_id', 1, false);
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
          public          postgres    false    229            �           2606    16704 2   device_data_collection device_data_collection_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.device_data_collection
    ADD CONSTRAINT device_data_collection_pkey PRIMARY KEY (r_no);
 \   ALTER TABLE ONLY public.device_data_collection DROP CONSTRAINT device_data_collection_pkey;
       public            postgres    false    214            �           2606    16706    network_protocol device_id_ukey 
   CONSTRAINT     _   ALTER TABLE ONLY public.network_protocol
    ADD CONSTRAINT device_id_ukey UNIQUE (device_id);
 I   ALTER TABLE ONLY public.network_protocol DROP CONSTRAINT device_id_ukey;
       public            postgres    false    223            �           2606    16708 0   device_management_log device_management_log_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.device_management_log
    ADD CONSTRAINT device_management_log_pkey PRIMARY KEY (r_no);
 Z   ALTER TABLE ONLY public.device_management_log DROP CONSTRAINT device_management_log_pkey;
       public            postgres    false    219            �           2606    16710 (   device_management device_management_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.device_management
    ADD CONSTRAINT device_management_pkey PRIMARY KEY (r_no);
 R   ALTER TABLE ONLY public.device_management DROP CONSTRAINT device_management_pkey;
       public            postgres    false    217            �           2606    16712 <   network_protocol_collection network_protocol_collection_pkey 
   CONSTRAINT     |   ALTER TABLE ONLY public.network_protocol_collection
    ADD CONSTRAINT network_protocol_collection_pkey PRIMARY KEY (r_no);
 f   ALTER TABLE ONLY public.network_protocol_collection DROP CONSTRAINT network_protocol_collection_pkey;
       public            postgres    false    224            �           2606    16714 &   network_protocol network_protocol_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.network_protocol
    ADD CONSTRAINT network_protocol_pkey PRIMARY KEY (r_no);
 P   ALTER TABLE ONLY public.network_protocol DROP CONSTRAINT network_protocol_pkey;
       public            postgres    false    223            �           2606    16716 ,   site_management_log site_management_log_pkey 
   CONSTRAINT     l   ALTER TABLE ONLY public.site_management_log
    ADD CONSTRAINT site_management_log_pkey PRIMARY KEY (r_no);
 V   ALTER TABLE ONLY public.site_management_log DROP CONSTRAINT site_management_log_pkey;
       public            postgres    false    231            �           2606    16718 $   site_management site_management_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.site_management
    ADD CONSTRAINT site_management_pkey PRIMARY KEY (r_no);
 N   ALTER TABLE ONLY public.site_management DROP CONSTRAINT site_management_pkey;
       public            postgres    false    230            �           2620    16719 '   device_management device_management_trg    TRIGGER     �   CREATE TRIGGER device_management_trg AFTER INSERT ON public.device_management FOR EACH ROW EXECUTE FUNCTION public.devicetrigger();
 @   DROP TRIGGER device_management_trg ON public.device_management;
       public          postgres    false    217    232            �           2620    16720 +   device_management device_management_trg_del    TRIGGER     �   CREATE TRIGGER device_management_trg_del AFTER UPDATE ON public.device_management FOR EACH ROW EXECUTE FUNCTION public.devicetrigger_del();
 D   DROP TRIGGER device_management_trg_del ON public.device_management;
       public          postgres    false    233    217            �           2620    16721 #   site_management site_management_log    TRIGGER     �   CREATE TRIGGER site_management_log AFTER INSERT ON public.site_management FOR EACH ROW EXECUTE FUNCTION public.site_insert_trg();
 <   DROP TRIGGER site_management_log ON public.site_management;
       public          postgres    false    230    234            ?   B   x�3���,,OU+j`Vy*�����	P���2�T�21̀SÜ3#1��Ĵ ���qqq �|      B   �  x���͊�0��y���Fҹ�^�{1���i6e�~G��]���4L0�����/Gw]�����~�M��'�;G@܃�+Ԃ��*4���U��0\���I0��}B�
b��zw���o��萐��~xp��PD
$�	�4�~{�����z��:q�����q��4y����O1���A�P�����n�y92-�|��&�"�P�	Cr���h=2�o��?^w?ƛ�n�~V�����tĦOwc㵇�". ���*Q�������˽^���#}b�.v��3*�>�hX������L�U��m]�G <��9��I��14'���:BE�#&�-'��ɋ�:q�f��#P�CZH}fۧm#�-��}@��6!�
�R(`!�b��A\!^ٌ�'��� ��,��0ٌ�6O�j�-	��<�Z�b�YS�{������`{��y�Wn���������8���j�m%s5�5� ��xl:�!������]�����O	(�z�]�}  �M      D     x���Kn�H���S�jԻ���f6>A6�H��dlA��O5%;�$I��e��S�o�ww�����w�w7_���YV�+�+�=b/�X�Ł�7.�v��m���E�q"���}İw6G���,1�tg��s����1��GN՝�A���ϧ�Ə�a����"�0��^�q&)�a6����[M�L���������b_�`����n��u=��)ɹԢP�Vm�/��n���>,$&���g��֫�XR.h�@�]�>��NDy���r�D]�z���f{��j�@L[0��|�?H�璊0Y�x�]>�E��-)�_��L��Q�T�C.=K���## ���+,|����@>S/�$��Dy�^�J9�*���G�"P�E�,K"�j��<�&�Hrx=�ფM�H:�g	�X5����M�gQO�8�W�MӒ�+�*��!�M��^G��Eg,��T��X%�!yh�'��+,R�r�?O��7��R�D��:�0���i�X2iu��C�e(�`M��bx���������մ���Kk�����3�Ppy.�5���rpenn�濫"��E�^���b�F�5�RJ4p���c�/��w�-��Kqt�DK�C]N���r�bi9q�|������i��0����M$r�'+$l�r"�g�EO������A|�]��΅[_��*�y��j�_t�}iL�3���-�Fe�5�����ש%k�s6�D�Gm�X��Ѳ�Ҧs;��9`�^�L�k�E]�Q%π���3f0[�=q�u�R�NcpBxx��Q{�T�9���3��3�y5^������ �z��1��5�[�y��Ԥ`�=aO%Q6�8�M�bDi?L("oqS.E(#,to!R/F�^4U�Ͳ��3���q(���4�a�������|)�(Jr2t���o������*�>8�^��-T���jCLn�:��Es�a�$����e �X�j����	rD#"�F�b�>_Bh���H�IƽwkzҾ?��6BEj98��d.gpըd���x���D�	y�$�(&.�.���������(      H   �   x�uα�0���sۉ�fCbaA]غ �!h��z(�p:y{:S��H	~��tmp�6� �p��\�p�r�"eG�Q��a��m���+-5�Ґ�4!�Ku� 0<�ҿ<��k�9�`Y;3��8*���HKCTf$sd������_�ْ*1if"�\>�      I      x������ � �      O   �  x��TKn� ]�)�@3��n��	�A���I��vj���s��*B̌ż7�C`��lSyo^6�T����@��*l��S��*��E����P�^(��J���G�I����b��<,��E�Y8�Ee%:��c��m�ڱnP��L��r�1s(}��'=_�~�	ZIj�N�S٤�Xլm[y{�kxK�Ki��S����!H�і�̬Z3QG��~�� U�6H��Rǲ� ESm���]pS�@B��6 ���g�ج[����}V�>�AI����]��!5D�ҡ�&�5��Y�ъ�h�z�(�x���[`�њ�E�Y��X��� ?��~�w<"��U^׬�$X���`4�5����a8�ᰟ�g5�T���M��n/�[����֥�� 9&.C      P   q   x���1
�@��W�>t�݋o��3�&錛�>$)���� $аʴܦG����m����ǥG�rg�&o��A��'���s����S�xd$c�5-�o���-��ҳQǤ�/QN6�     
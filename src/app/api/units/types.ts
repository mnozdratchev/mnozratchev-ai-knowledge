type Unit = {
    id: string,
    name: string,
    creation_date: string,
    description: string,
    versions: { id: string, name: string, desription: string | null }[]
}

type Version = {
    doc: FormData
    user_id: string,
    kunit_vers_name: string,
}
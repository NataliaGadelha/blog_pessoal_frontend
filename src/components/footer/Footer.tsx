import { DiscordLogoIcon, GithubLogoIcon, LinkedinLogoIcon} from '@phosphor-icons/react'

function Footer() {

    const data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-floresta text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Blog Pessoal Natália Gadelha | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse minhas redes sociais</p>
                        <div className='flex gap-2'>
                            <a href="https://www.linkedin.com/in/natalia-gadelha" target="_blank">
                                <LinkedinLogoIcon size={48} weight='duotone' />
                            </a>
                            <a href="https://github.com/NataliaGadelha" target="_blank">
                                <GithubLogoIcon size={48} weight='duotone' />
                            </a>
                            <a href="https://discord.com/users/1049519666248298586" target="_blank">
                                <DiscordLogoIcon size={48} weight='duotone' />
                            </a>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Footer
"use client"
import {
	Button
} from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form"
import {
	Input
} from "@/components/ui/input"
import {
	zodResolver
} from "@hookform/resolvers/zod"
import {
	useForm
} from "react-hook-form"
import {
	toast
} from "sonner"
import * as z from "zod"

const formSchema = z.object({
	username: z.string().min(1),
	password: z.string()
});

export default function FormSignIn() {

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),

	})

	const handleSubmit = (values: z.infer<typeof formSchema>) => {
		try {
			toast(
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(values, null, 2)}</code>
				</pre>
			);
		} catch (error) {
			console.error("Form submission error", error);
			toast.error("Failed to submit the form. Please try again.");
		}
	}

	return (
		<Form {...form}>

			<form
				title="Formulário de Login"
				className=" flex flex-col space-y-8 w-112 pt-16 pb-16 p-10 bg-white rounded-3xl"
				onSubmit={form.handleSubmit(handleSubmit)}
			>

				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Login</FormLabel>
							<FormControl>
								<Input type="text" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Senha</FormLabel>
							<FormControl>
								<Input type="password" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					className="font-bold bg-[var(--color-primary)]"
				>
					Entrar
				</Button>
			</form>
		</Form>
	)
}
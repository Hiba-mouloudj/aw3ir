import java.util.Scanner;

public class DevinC {

	public static void main(String[] args) {
		
		int Min = 0;
		int Max = 99;
		int rep =0;
		int Nb = 5;
		int essais = 0;
		int nombreAleatoire = Min + (int)(Math.random() * ((Max - Min) + 1));
		System.out.println(nombreAleatoire);

		
		while (rep == 0 && essais < Nb) {
			
			Scanner sc = new Scanner(System.in);
			System.out.println("Veuillez saisir un nombre :");
			int entier = sc.nextInt();
			System.out.println("Vous avez saisi le nombre : " + entier);
			
			if (entier == nombreAleatoire ) {
				
				System.out.println(">>>>>bravo");
				rep = 1;
				
			}
			if (entier > nombreAleatoire ) {
				
				System.out.println(">>>>>trop grand");
				
				
			}
			if (entier < nombreAleatoire ) {
				
				System.out.println(">>>>>trop petit");
				
				
			}

			
			essais = essais + 1;
			
			if (essais == Nb ) {
				
				System.out.println("-------le jeu est terminé-------");
				
				
			}
			
		}
		
		
		
		
	}

}









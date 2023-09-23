{ pkgs ? import <nixpkgs> {}}:

pkgs.mkShell {
  name = "portfolio";
  packages = [ 
    pkgs.zola
    pkgs.bashInteractive
    pkgs.nodejs
    pkgs.openjdk17
    ];
}

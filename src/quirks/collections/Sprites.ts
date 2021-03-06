import Category from "quirks/Category";
import Tavrisprite from "quirks/database/sprites/Tavrisprite";
import Erisolsprite from "quirks/database/sprites/Erisolsprite";

export default class Sprites extends Category {
    public constructor() {
        super("Sprites");

        this.addQuirk(new Tavrisprite());
        this.addQuirk(new Erisolsprite());
    }
}
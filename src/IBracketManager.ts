import { Position } from "vscode";
import Bracket from "./bracket";
import BracketClose from "./bracketClose";
import Token from "./token";

interface IBracketManager {
    getPreviousIndex(type: number): number;
    addOpenBracket(token: Token, color: string, colorIndex: number): void;
    GetAmountOfOpenBrackets(type: number): number;
    addCloseBracket(token: Token): void;
    getClosingBracket(position: Position): BracketClose | undefined;
    copyCumulativeState(): IBracketManager;
    getHash(): string;
    offset(startIndex: number, amount: number): void;
    getAllBrackets(): Bracket[];
    getColors(token: Token): string[];
}

export default IBracketManager;

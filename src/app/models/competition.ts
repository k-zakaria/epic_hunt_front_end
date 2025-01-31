export interface Competition {
    id: string;
    code: string;
    location: string;
    date: string;
    speciesType: string;
    minParticipants?: number;
    maxParticipants?: number;
    openRegistration: boolean;
}

export interface CompetitionState {
    competitions: Competition[];
    total: number;
    loading: boolean;
    error: string | null;
}

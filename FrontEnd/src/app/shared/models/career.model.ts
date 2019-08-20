import { JobTitleEnum } from '@app/shared/models/enums/job-title-enum';
import { GameEnum } from '@app/shared/models/enums/game-enum';
import { LocationEnum } from '@app/shared/models/enums/location-enum';
import { WorkTypeEnum } from '@app/shared/models/enums/work-type-enum';

export class Career {
    Id: number;
    JobTitle: JobTitleEnum;
    Game: GameEnum;
    Location: LocationEnum;
    WorkType: WorkTypeEnum;
    PostDate: Date;
}

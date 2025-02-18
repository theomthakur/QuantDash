import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import FlexBetween from "./FlexBetween";

type Props = {
    title: string;
    subtitle?: string;
    sideText?: string;
    icon?: React.ReactNode;
};

const BoxHeader = ({ icon, title, subtitle, sideText }: Props) => {
    const { palette } = useTheme();
    return (
        <FlexBetween color={palette.grey[400]} margin="0.75rem 1rem 0 1rem">
            <FlexBetween>
                {icon}
                <Box width="100%">
                    <Typography variant="h4" mb="-0.1rem">
                        {title}
                    </Typography>
                    <Typography variant="h6">
                        {subtitle}
                    </Typography>
                    <Typography variant="h5" fontWeight="700" color={palette.secondary[500]}>
                        {sideText}
                    </Typography>
                </Box>
            </FlexBetween>
        </FlexBetween>   
    );
};

export default BoxHeader;
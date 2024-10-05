import { Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material"

import AcUnitIcon from '@mui/icons-material/AcUnit';
import SendIcon from '@mui/icons-material/Send';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from "react";


export const MuiButton = () => {
    const [formats, setFormats] = useState<string[]>([])
    const [formatsTwo, setFormatsTwo] = useState<string | null>(null)
    console.log(formats)
    const handleFormatChange = (_events: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
        setFormats(updatedFormats)
    }
    console.log(formatsTwo)
    const handleFormatChangeTwo =(_events: React.MouseEvent<HTMLElement>, updatedFormats: string) => {
        setFormatsTwo(updatedFormats)
    }
    return (
        <Stack spacing={4}>
            <h1>Basic buttons</h1>
            <Stack direction={"row"} spacing={2}>
                {/* Stack is used instead of division and it will cover later */}
                <Button variant="text">Text</Button>
                <Button variant="text" href="https://www.google.com">Text</Button>
                {/* when adding a href attribute to a button it will change to be a link tag */}
                <Button variant="outlined">Outlined</Button>
                <Button variant="contained">Contained</Button>
                {/* to update the default component we can refer the customisation section 
            also we can see the default values of theme if we opet the default theme view
            in the customization
        */}

            </Stack>

            <h1>Colour variants</h1>
            <Stack direction={"row"} spacing={2}>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="warning">Warning</Button>
            </Stack>

            <h1>Colour variants</h1>
            <Stack display={"block"} direction={"row"} spacing={2}>
                <Button variant="contained" color="primary" size="small">Primary</Button>
                <Button variant="contained" color="primary" size="medium">Primary</Button>
                <Button variant="contained" color="primary" size="large">Primary</Button>
            </Stack>

            <h1>Icons</h1>
            <Stack spacing={2} direction={"row"}>
                {/* to add icons go to components and go to icons 
                then npm install @mui/icons-material
                then go to the Meterial Icons
                    to add a icon in the button along with texts we should use the start/end
                    icon

                there is an another way too we can simply add a icon button without having 
                texts for that we can use IconButton and wrap the component with in it    
                */}

                {/* disableRipple is the attribute use to remove the ripple effect while clicking */}
                <Button variant="contained" startIcon={<AcUnitIcon />} disableRipple>start icon</Button>

                {/* disabled elevation is one property use to remove the box shadow */}
                <Button variant="contained" endIcon={<AcUnitIcon />} disableElevation>end icon</Button>

                <IconButton aria-label="send" color="primary">
                    <SendIcon />
                </IconButton>
            </Stack>


            <h1>Button Groups</h1>
            <Stack direction={"row"}>
                {/* we can use button group for showing a set of buttons in a well designed manner 
                     donig so we can do styling for the wrapper ButtonGroup which will applied to evey button
                     orientation:vertical alignment for the children

                    */}
                <ButtonGroup variant="contained" color="primary" size="large" orientation="vertical" aria-label="alignment button group">
                    <Button>one</Button>
                    <Button color="secondary">two</Button>
                    <Button>three</Button>
                </ButtonGroup>
            </Stack>

            <h1>toggle button could select all the buttons</h1>
            <Stack direction={'row'}>
                <ToggleButtonGroup aria-label="text formating" value={formats} onChange={handleFormatChange}>
                    <ToggleButton value={"bold"}><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value={"italic"}><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value={"underlined"}><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <h1>toggle button could select only one button at a time</h1>
            <Stack direction={'row'}>
                <ToggleButtonGroup aria-label="text formating" value={formatsTwo} onChange={handleFormatChangeTwo} color="success">
                    <ToggleButton value={"bold"}><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value={"italic"}><FormatItalicIcon /></ToggleButton>
                    <ToggleButton value={"underlined"}><FormatUnderlinedIcon /></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}